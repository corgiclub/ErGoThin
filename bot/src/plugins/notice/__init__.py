import nonebot
from apscheduler.schedulers.background import BackgroundScheduler
from nonebot import require

scheduler: BackgroundScheduler = require("nonebot_plugin_apscheduler").scheduler


@scheduler.scheduled_job("cron", hour="10,17")
async def notice():
    bot = nonebot.get_bot()
    await bot.send_group_msg(group_id=590819255, message=f'打卡！')
