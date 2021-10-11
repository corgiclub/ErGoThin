import nonebot
from nonebot.adapters.cqhttp import Bot as CQHTTPBot
from nonebot.log import logger

nonebot.init()
driver = nonebot.get_driver()
driver.register_adapter("cqhttp", CQHTTPBot)
nonebot.load_plugins("src/plugins")

if __name__ == "__main__":
    nonebot.run(host='0.0.0.0', port=9080)
    logger.add("file_1.log", rotation="4096 MB")
