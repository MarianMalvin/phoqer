from typing import Mapping

from fastapi import APIRouter, Depends, HTTPException, Response, status
from fastapi.responses import RedirectResponse

from config import ENVIRONMENT_URL
from users import crud
from users.schemas import ShortUser, User, UserCreateRequest, UserPartialUpdate
from users.utils import get_activation_jwt, get_password_hash, send_new_account_email
from utils import decode_jwt, get_current_user

router = APIRouter(
    prefix="/users",
    tags=["users"],
)


@router.post("/signup", status_code=status.HTTP_204_NO_CONTENT)
async def create_user_open(user: UserCreateRequest) -> Response:
    """
    Create new user
    """
    if await crud.user_exist(email=user.email):
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system",
        )
    await crud.create_user(
        email=user.email,
        first_name=user.first_name,
        last_name=user.last_name,
        hashed_password=get_password_hash(user.password),
    )
    activation_token = get_activation_jwt(user.email)
    send_new_account_email(
        email_to=user.email,
        username=user.email,
        activation_token=activation_token,
    )
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.get("/activation/{jwt}", status_code=status.HTTP_307_TEMPORARY_REDIRECT)
async def activate_user(jwt: str) -> RedirectResponse:
    """
    Activate user
    """
    user_email = decode_jwt(jwt).get("sub")
    if not user_email:
        raise HTTPException(
            status_code=400,
            detail="Invalid JWT",
        )
    await crud.activate_user(user_email)
    return RedirectResponse(f"{ENVIRONMENT_URL}/auth/confirmation?userId={user_email}")


@router.get("/me", response_model=User)
async def logged_in_user_details(user_id: int = Depends(get_current_user)) -> Mapping:
    """
    Get logged in user details
    """
    return await crud.get_user_by_id(user_id)


@router.get("/short/{user_id}", response_model=ShortUser)
async def get_short_user_details(user_id: int) -> Mapping:
    """
    Get short user details by user_id
    """
    return await crud.get_short_user(user_id)


@router.get("/{user_id}", response_model=User)
async def get_user_details(user_id: int) -> Mapping:
    """
    Get user details by user_id
    """
    return await crud.get_user_by_id(user_id)


@router.patch("/me", status_code=204)
async def update_user(
    update_user_data: UserPartialUpdate,
    author_id: int = Depends(get_current_user),
) -> Response:
    stored_user_data = await crud.get_user_by_id(author_id)
    await crud.partial_update_user(
        user_id=author_id,
        update_user_data=update_user_data,
        stored_user_data=stored_user_data,
    )
    return Response(status_code=204)
