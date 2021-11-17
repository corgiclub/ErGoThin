import nonebot
from nonebot import require

scheduler = require("nonebot_plugin_apscheduler").scheduler

nonebot.init()


@scheduler.scheduled_job('cron', hour='10,17')
async def _():
    bot = nonebot.get_bot()
    try:
        await bot.send_group_msg(group_id=590819255, message='今日打卡喔')
    except Exception as e:
        print(e)
