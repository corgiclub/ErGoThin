from nonebot import get_driver
from nonebot.drivers.fastapi import Driver
from .controller import plugin_manager, index

driver: Driver = get_driver()
app = driver.server_app

app.include_router(plugin_manager.router)
app.include_router(index.router)

