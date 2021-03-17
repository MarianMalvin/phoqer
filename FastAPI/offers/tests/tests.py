from fastapi import status


def test_get_offer(client):
    response = client.get("offers/7cea9f56-e211-467b-8515-aa88f4a4a5c3")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "author_id": 1,
        "category": "kitty",
        "category_name": "Kitty",
        "city": "Kiev",
        "cover_image": "https://example.com/iphone.jpeg",
        "currency": "UAH",
        "deposit_val": 0,
        "description": "New Phone",
        "doc_needed": True,
        "extra_requirements": "text exta req",
        "first_name": "Marian",
        "id": "7cea9f56-e211-467b-8515-aa88f4a4a5c3",
        "images": [
            "http://phoqer.com//mediafiles/image(1)_H802r7h.jpeg",
            "http://phoqer.com//mediafiles/image(2)_bGKHdms.jpeg",
            "http://phoqer.com//mediafiles/image(3)_PV4BY6L.jpeg",
            "http://phoqer.com//mediafiles/image(4)_SCiBiMz.jpeg",
            "http://phoqer.com//mediafiles/5_zDDUs4j.jpg",
            "http://phoqer.com//mediafiles/4_QsbenAd.jpg",
            "http://phoqer.com//mediafiles/3_5vqrqhm.jpg",
            "http://phoqer.com//mediafiles/2_5jbRqfd.jpg",
            "http://phoqer.com//mediafiles/1_RrQEWYc.jpg",
        ],
        "is_deliverable": True,
        "is_favorite": False,
        "is_promoted": True,
        "last_name": "Zozulia",
        "max_rent_period": 10,
        "min_rent_period": 20,
        "price": 499,
        "profile_img": "https://example.com/dic_pic.jpeg",
        "pub_date": "2021-01-20",
        "status": "ACTIVE",
        "sub_category": "bike",
        "sub_category_name": "Bike",
        "title": "Iphone 12",
        "views": 1000000,
    }


def test_is_favorite_user_with_favorite(client):
    response = client.get(
        "offers/1a114c8e-14b7-46e4-8ad0-f251a35a6938",
        headers={"Authorization": "Token 472df9e4e5f55a0bc2a2f1139e2ad49c5d76076a"},
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["is_favorite"] is True


def test_is_favorite_user_with_no_favorite(client):
    response = client.get(
        "offers/7cea9f56-e211-467b-8515-aa88f4a4a5c3",
        headers={"Authorization": "Token 472df9e4e5f55a0bc2a2f1139e2ad49c5d76076a"},
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["is_favorite"] is False


def test_create_offer_draft(client):
    post_data = {
        "category": "kitty",
        "city": "Kiev",
        "cover_image": "https://example.com/iphone.jpeg",
        "currency": "UAH",
        "deposit_val": 666,
        "description": "New Phone",
        "doc_needed": True,
        "extra_requirements": "text exta req",
        "first_name": "Marian",
        "images": [
            "http://phoqer.com//mediafiles/image(1)_H802r7h.jpeg",
            "http://phoqer.com//mediafiles/image(2)_bGKHdms.jpeg",
            "http://phoqer.com//mediafiles/image(3)_PV4BY6L.jpeg",
            "http://phoqer.com//mediafiles/image(4)_SCiBiMz.jpeg",
            "http://phoqer.com//mediafiles/5_zDDUs4j.jpg",
            "http://phoqer.com//mediafiles/4_QsbenAd.jpg",
            "http://phoqer.com//mediafiles/3_5vqrqhm.jpg",
            "http://phoqer.com//mediafiles/2_5jbRqfd.jpg",
            "http://phoqer.com//mediafiles/1_RrQEWYc.jpg",
        ],
        "is_deliverable": True,
        "last_name": "Zozulia",
        "max_rent_period": 10,
        "min_rent_period": 20,
        "price": 499,
        "sub_category": "bike",
        "title": "Iphone 12",
        "views": 0,
    }
    response = client.post(
        "offers",
        json=post_data,
        headers={"Authorization": "Token 472df9e4e5f55a0bc2a2f1139e2ad49c5d76076a"},
    )
    assert response.status_code == status.HTTP_204_NO_CONTENT


def test_create_offer_not_authed(client):
    post_data = {}
    response = client.post(
        "offers",
        json=post_data,
    )
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_get_my_offers_not_authed(client, auth_token):
    response = client.get("offers/status/all")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_get_my_offers(client, auth_token):
    response = client.get("offers/status/all", headers=auth_token)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {
        "data": [
            {
                "cover_image": "https://example.com/iphone.jpeg",
                "currency": "UAH",
                "description": "New Phone 17",
                "functions": ["DO_ACTIVE", "ARCHIVE"],
                "id": "6c2d804e-b916-4d1c-82ec-73508ebd2845",
                "is_deliverable": True,
                "is_promoted": False,
                "price": None,
                "pub_date": "2021-01-15",
                "title": None,
                "views": 0,
            },
            {
                "cover_image": None,
                "currency": None,
                "description": None,
                "functions": ["DO_ACTIVE", "ARCHIVE"],
                "id": "0e5b47f0-ac19-4d67-83d8-3046a987bc86",
                "is_deliverable": None,
                "is_promoted": False,
                "price": None,
                "pub_date": "2021-01-15",
                "title": None,
                "views": 0,
            },
            {
                "cover_image": None,
                "currency": None,
                "description": None,
                "functions": ["DO_ACTIVE", "ARCHIVE"],
                "id": "d9560917-3db3-44a0-89a7-9b5076df73cd",
                "is_deliverable": None,
                "is_promoted": False,
                "price": None,
                "pub_date": "2021-01-15",
                "title": None,
                "views": 0,
            },
            {
                "cover_image": "http://phoqer.com//mediafiles/0_PrBB7kx.jpg",
                "currency": None,
                "description": "sfsdsdf",
                "functions": ["DO_ACTIVE", "ARCHIVE"],
                "id": "ffbaafb0-b94e-4b27-9699-c04e25f09190",
                "is_deliverable": False,
                "is_promoted": False,
                "price": 4334,
                "pub_date": "2021-01-21",
                "title": "name",
                "views": 0,
            },
        ],
        "total": 20,
    }
