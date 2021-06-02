from fastapi import status


def test_get_chats_not_auth(client):
    response = client.get("chats")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert response.json() == {"detail": "Not authenticated"}


def test_get_chats(client, auth_token):
    response = client.get("chats", headers=auth_token)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "total": 1,
        "data": [
            {
                "chat_id": 1,
                "recipient_id": 1,
                "recipient_first_name": "Igor",
                "recipient_last_name": "Mykhailychenko",
                "recipient_last_activity": "2021-03-10T00:00:00+00:00",
                "new_messages": 1,
                "cover_image": "http://phoqer.com/mediafiles/4f6f6434-b586-4a27-82e7-21cc2e7fbfe5-image(2).jpeg",
            },
            {
                "chat_id": 3,
                "recipient_id": 1021,
                "recipient_first_name": "Vita",
                "recipient_last_name": "Herzog",
                "recipient_last_activity": "2021-05-29T00:00:00+00:00",
                "new_messages": 0,
                "cover_image": "http://phoqer.com/mediafiles/a4639bcc-82c7-4cfd-bb4a-21bf04994bbb-image.jpeg",
            },
        ],
    }


def test_get_chats_search(client, auth_token):
    response = client.get("chats?search=igor", headers=auth_token)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "total": 1,
        "data": [
            {
                "chat_id": 1,
                "recipient_id": 1,
                "recipient_first_name": "Igor",
                "recipient_last_name": "Mykhailychenko",
                "recipient_last_activity": "2021-03-10T00:00:00+00:00",
                "new_messages": 1,
                "cover_image": "http://phoqer.com/mediafiles/4f6f6434-b586-4a27-82e7-21cc2e7fbfe5-image(2).jpeg",
            },
        ],
    }


def test_get_chats_search_no_result(client, auth_token):
    response = client.get("chats?search=igorigorigor", headers=auth_token)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {"total": 0, "data": []}


def test_get_messages_no_permission(client, auth_token):
    response = client.get("chats/2", headers=auth_token)
    assert response.status_code == status.HTTP_403_FORBIDDEN
    assert response.json() == {"detail": "The user does not have access to this chat"}


def test_get_messages_not_auth(client):
    response = client.get("chats/1")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert response.json() == {"detail": "Not authenticated"}


def test_get_messages_invalid_chat_id(client, auth_token):
    response = client.get("chats/100000000", headers=auth_token)
    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json() == {"detail": "Chat with id 100000000 does not exist"}


def test_get_messages(client, auth_token):
    response = client.get("chats/1", headers=auth_token)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "total": 1,
        "data": [
            {
                "id": 1,
                "text": "Hello",
                "creation_datetime": "2021-05-29T11:22:07.045768+00:00",
                "is_red": True,
                "users_user": 2,
                "first_name": "Marian",
                "last_name": "Zozulia",
                "profile_img": None,
                "uploads": ["http://example.com", "http://example.com"],
            },
            {
                "id": 2,
                "text": "Hello, Marian",
                "creation_datetime": "2021-05-29T11:22:07.045768+00:00",
                "is_red": True,
                "users_user": 1,
                "first_name": "Igor",
                "last_name": "Mykhailychenko",
                "profile_img": None,
                "uploads": ["http://example.com"],
            },
            {
                "id": 3,
                "text": "...",
                "creation_datetime": "2021-05-29T11:22:07.045768+00:00",
                "is_red": False,
                "users_user": 2,
                "first_name": "Marian",
                "last_name": "Zozulia",
                "profile_img": None,
                "uploads": [],
            },
        ],
    }
