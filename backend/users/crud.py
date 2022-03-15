import datetime
from typing import Mapping, Optional

from pydantic import EmailStr

from config import database
from users.schemas import UserPartialUpdate


async def user_exist(email: EmailStr) -> bool:
    query = "SELECT TRUE FROM users_user WHERE email = :email"
    return bool(await database.fetch_one(query=query, values={"email": email}))


async def create_user(
    email: str,
    first_name: str,
    last_name: str,
    hashed_password: Optional[str] = None,
    bio: str = "",
    birth_date: Optional[str] = None,
    city: Optional[str] = None,
    country: Optional[str] = None,
    is_active: bool = False,
    is_staff: bool = False,
    is_superuser: bool = False,
    profile_img: Optional[str] = None,
    account_type: str = "INTERNAL",
) -> None:
    query = """
    INSERT INTO users_user (
        password,
        last_login,
        city,
        country,
        is_superuser,
        first_name,
        last_name,
        is_staff,
        is_active,
        date_joined,
        bio,
        birth_date,
        email,
        profile_img,
        account_type)
    VALUES (
        :password,
        current_date,
        :city,
        :country,
        :is_superuser,
        :first_name,
        :last_name,
        :is_staff,
        :is_active,
        current_date,
        :bio,
        :birth_date,
        :email,
        :profile_img,
        :account_type)
    """
    values = {
        "bio": bio,
        "birth_date": birth_date,
        "city": city,
        "country": country,
        "email": email,
        "first_name": first_name,
        "is_active": is_active,
        "is_staff": is_staff,
        "is_superuser": is_superuser,
        "last_name": last_name,
        "password": hashed_password,
        "profile_img": profile_img,
        "account_type": account_type,
    }
    await database.execute(query=query, values=values)


async def activate_user(email: EmailStr) -> None:
    query = "UPDATE users_user SET is_active = TRUE WHERE email = :email"
    await database.execute(query=query, values={"email": email})


async def get_user_by_id(user_id: int) -> Mapping:
    query = """
    SELECT
        bio,
        birth_date,
        city,
        country,
        date_joined,
        email,
        first_name,
        id,
        last_login AS last_activity,
        last_name,
        profile_img
    FROM users_user
    WHERE id = :id
    """
    return await database.fetch_one(query=query, values={"id": user_id}) or {}


async def get_user_by_email(email: str) -> Mapping:
    query = """
    SELECT
        account_type,
        bio,
        birth_date,
        city,
        country,
        date_joined,
        email,
        first_name,
        id,
        is_active,
        is_staff,
        is_superuser,
        last_login,
        last_name,
        password,
        profile_img
    FROM users_user
    WHERE email = :email
    """
    user = await database.fetch_one(query=query, values={"email": email})
    if not user:
        return {}
    return user


async def get_short_user(user_id: int) -> Mapping:
    query = """
    SELECT
        city,
        country,
        date_joined,
        first_name,
        id,
        last_login AS last_activity,
        last_name,
        profile_img
    FROM users_user
    WHERE id = :id
    """
    return await database.fetch_one(query=query, values={"id": user_id}) or {}


async def partial_update_user(
    user_id: int,
    update_user_data: UserPartialUpdate,
    stored_user_data: Mapping,
) -> None:
    stored_user_model = UserPartialUpdate(**stored_user_data)
    update_data = update_user_data.dict(exclude_unset=True)
    updated_user = stored_user_model.copy(update=update_data)
    query = """
    UPDATE users_user
    SET
        bio = :bio,
        birth_date = :birth_date,
        city = :city,
        country = :country,
        first_name = :first_name,
        last_name = :last_name,
        profile_img = :profile_img
    WHERE id = :user_id
    """
    values = {
        "bio": updated_user.bio,
        "birth_date": updated_user.birth_date,
        "city": updated_user.city,
        "country": updated_user.country,
        "first_name": updated_user.first_name,
        "last_name": updated_user.last_name,
        "profile_img": updated_user.profile_img,
        "user_id": user_id,
    }
    await database.execute(query=query, values=values)


async def update_last_login(user_id: int) -> None:
    query = "UPDATE users_user SET last_login = :current_timestamp WHERE id = :user_id"
    await database.execute(
        query=query,
        values={"user_id": user_id, "current_timestamp": datetime.datetime.now()},
    )


async def delete_user_offers(author_id: int) -> None:
    query = "DELETE FROM offers_offer WHERE author_id = :user_id"
    await database.execute(query=query, values={"user_id": author_id})


async def delete_comment_replies(author_id: int) -> None:
    query = """
    DELETE FROM comments_comment WHERE id IN (
        SELECT replies_id
        FROM comments_comment
        WHERE replies_id =
            (SELECT 
                id 
            FROM comments_comment
            WHERE author_id = :user_id))
    """
    await database.fetch_all(query=query, values={"user_id": author_id})


async def delete_user_comments(author_id: int) -> None:
    query = "DELETE FROM comments_comment WHERE author_id = :user_id"
    await database.execute(query=query, values={"user_id": author_id})


@database.transaction()
async def delete_user(user_id: int, author_id: int) -> None:
    await delete_comment_replies(author_id)
    await delete_user_comments(author_id)
    await delete_user_offers(author_id)
    query = "DELETE FROM users_user WHERE id = :user_id"
    await database.execute(query=query, values={"user_id": user_id})
