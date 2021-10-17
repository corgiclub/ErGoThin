import os
from dataclasses import dataclass
from pathlib import Path

import yaml
from fastapi import APIRouter
from nonebot.plugin import get_loaded_plugins

from src.utils.stream import ListStream

router = APIRouter()


@dataclass
class PluginBO:
    class Meta:
        name: str
        description: str

    meta: Meta


@router.get('/api/v1/plugins')
def index():
    plugins = get_loaded_plugins()
    def read_yaml(filepath: str) -> dict:
        with open(filepath, 'r', encoding='utf8') as f:
            return yaml.load(f.read(), Loader=yaml.SafeLoader)

    p = Path('src/plugins')
    plugins = ListStream(p.iterdir()) \
        .filter(lambda x: x.is_dir()) \
        .map(lambda x: read_yaml(os.path.join(str(x), 'config.yml'))) \
        .collect()
    return plugins
