from __future__ import annotations

from dataclasses import dataclass
from dataclasses import field
from typing import List

from sqlalchemy import Column, String, ForeignKey, Integer, MetaData
from app.annotations.product import ProductAnnotation


@dataclass
class CategoryAnnotation:
    id: int = field(init=False)
    category_name: str = None
    product: List[Product] = field(default_factory=list)

