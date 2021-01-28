from typing import Union, List, Dict

from databases.backends.postgres import Record
from pydantic import HttpUrl

from comments.database import database
from comments.schemas import CommentRequest


@database.transaction()
async def create_comment(comment: CommentRequest, author_id: int, images: List[HttpUrl]) -> None:
    query = f'''
        INSERT INTO comments_comment (pub_date, body, author_id, offer_id, replies_id)
        VALUES (current_date, :body, :author_id, :offer_id, :replies_id)
        RETURNING id
        '''
    values = {
        "body": comment.body,
        "author_id": author_id,
        "offer_id": comment.offer_id,
        "replies_id": comment.replies_id
    }
    comment_id = await database.execute(query=query, values=values)
    if images and comment_id:
        await create_comment_images(images=images, comment_id=comment_id)


async def create_comment_images(images: List[HttpUrl], comment_id: int) -> None:
    name = 'empty_name'
    query = 'INSERT INTO comments_commentimage (url, name, comment_id) VALUES (:url, :name, :comment_id)'
    values = []
    for image_url in images:
        values.append({"url": image_url, "name": name, "comment_id": comment_id})
    await database.execute_many(query=query, values=values)


async def get_user_id(token: str) -> Union[int, None]:
    query = "SELECT user_id FROM authtoken_token WHERE key = :key"
    row = await database.fetch_one(query=query, values={'key': token})
    return row.get('user_id')


async def get_comments_list(offer_id: str) -> List[Record]:
    query = "SELECT * FROM comments_comment WHERE offer_id = :offer_id ORDER BY pub_date DESC"
    return await database.fetch_all(query=query, values={'offer_id': offer_id})


async def get_author_likes_map(author_id: int, offer_id: str) -> Dict[int, bool]:
    query = """
    SELECT comment_id, TRUE AS "like" FROM comments_like
    WHERE comment_id IN (select id from comments_comment where offer_id=:offer_id) AND author_id=:author_id
    """
    likes = await database.fetch_all(query=query, values={'author_id': author_id, 'offer_id': offer_id})
    return {
        like['comment_id']: like['like']
        for like in likes
    }


async def get_like_map(offer_id: str) -> Dict[int, int]:
    query = """
    SELECT comment_id, COUNT(author_id) AS likes_count FROM comments_like
    WHERE comment_id IN (select id from comments_comment where offer_id=:offer_id) GROUP BY comment_id
    """
    likes = await database.fetch_all(query=query, values={'offer_id': offer_id})
    return {
        like['comment_id']: like['likes_count']
        for like in likes
    }


async def get_dislike_map(offer_id: str) -> Dict[int, int]:
    query = """
    SELECT comment_id, COUNT(author_id) AS dislikes_count FROM comments_dislike
    WHERE comment_id IN (select id from comments_comment where offer_id=:offer_id) GROUP BY comment_id
    """
    dislikes = await database.fetch_all(query=query, values={'offer_id': offer_id})
    return {
        dislike['comment_id']: dislike['dislikes_count']
        for dislike in dislikes
    }


async def get_author_dislikes_map(author_id: int, offer_id: str) -> Dict[int, bool]:
    query = """
    SELECT comment_id, TRUE AS "dislike" FROM comments_dislike
    WHERE comment_id IN (select id from comments_comment where offer_id=:offer_id) AND author_id=:author_id
    """
    dislikes = await database.fetch_all(query=query, values={'author_id': author_id, 'offer_id': offer_id})
    return {
        dislike['comment_id']: dislike['dislike']
        for dislike in dislikes
    }


async def delete_all_comment_replies(comment_id: str) -> None:
    query = "DELETE FROM comments_comment WHERE replies_id = :comment_id"
    await database.execute(query=query, values={'comment_id': comment_id})


def delete_all_comment_likes(comment_id: int) -> None:
    query = "DELETE FROM comments_like WHERE comment_id = :comment_id"
    await database.execute(query=query, values={'comment_id': comment_id})


def delete_all_comment_dislikes(comment_id: int) -> None:
    query = "DELETE FROM comments_dislike WHERE comment_id = :comment_id"
    await database.execute(query=query, values={'comment_id': comment_id})


def delete_all_comment_images(comment_id: int) -> None:
    query = "DELETE FROM comments_commentimage WHERE comment_id = :comment_id"
    await database.execute(query=query, values={'comment_id': comment_id})


@database.transaction()
async def delete_comment(comment_id: str) -> None:
    await delete_all_comment_replies(comment_id)
    await delete_all_comment_likes(comment_id)
    await delete_all_comment_dislikes(comment_id)
    await delete_all_comment_images(comment_id)
    query = "DELETE FROM comments_comment WHERE id = :comment_id"
    await database.execute(query=query, values={'comment_id': comment_id})


async def delete_like(author_id: int, comment_id: int) -> None:
    query = "DELETE FROM comments_like WHERE comment_id = :comment_id AND author_id = :author_id"
    await database.execute(query=query, values={'author_id': author_id, 'comment_id': comment_id})


async def delete_dislike(author_id: int, comment_id: int) -> None:
    query = "DELETE FROM comments_dislike WHERE comment_id = :comment_id AND author_id = :author_id"
    await database.execute(query=query, values={'author_id': author_id, 'comment_id': comment_id})


async def create_like(author_id: int, comment_id: int) -> None:
    query = """
    INSERT INTO comments_like (author_id, comment_id)
    SELECT :author_id, :comment_id
    WHERE NOT EXISTS (SELECT TRUE FROM comments_like WHERE author_id = :author_id AND comment_id = :comment_id)
    """
    await database.execute(query=query, values={'author_id': author_id, 'comment_id': comment_id})


async def create_dislike(author_id: int, comment_id: int) -> None:
    query = """
        INSERT INTO comments_dislike (author_id, comment_id)
        SELECT :author_id, :comment_id
        WHERE NOT EXISTS (SELECT TRUE FROM comments_dislike WHERE author_id = :author_id AND comment_id = :comment_id)
        """
    await database.execute(query=query, values={'author_id': author_id, 'comment_id': comment_id})
