from __future__ import annotations

from dataclasses import dataclass
from dataclasses import field
from typing import List

from sqlalchemy import Column, String, ForeignKey, Integer, MetaData
from sqlalchemy.orm import relationship



@dataclass
class ProductAnnotation:
    id: int = field(init=False)
    name: str = None
    price: int = None
    updated: int = None
    created: int = None
    category_name: str = None



