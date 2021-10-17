from FastAPI.config import database


async def get_notifications(user_id: int):
    query = """
    SELECT
        notifications.id,
        notifications.notification_type,
        notifications.body,
        notifications.offer_id,
        notifications.pub_date,
        notifications.recipient_id,
        notifications.viewed
    FROM notifications
    WHERE recipient_id=:user_id
    """
    return await database.fetch_all(query=query, values={"user_id": user_id})