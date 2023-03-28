from sqlalchemy import Table, ForeignKey
from sqlalchemy.orm import relationship
from app.mappers.metadata_objs import metadata_obj
from app.mappers.mapping_registry import mapper_registry
from app.annotations.product import ProductAnnotation
from app.annotations.category import CategoryAnnotation
from app.models.product import product


category = Table(
    'category', metadata_obj,
    Column('id', Integer, primary_key=True),
    Column('category_name', String(50)),
    Column('product_id', ForeignKey('product.id'))
)

mapper_registry.map_imperatively(ProductAnnotation, product, properties={
    "category": relationship(CategoryAnnotation, backref="product", order_by=category.c.id)
})
