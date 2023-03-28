from sqlalchemy import Table, Column, String, Integer, Date
from app.mappers.metadata_objs import metadata_obj

product = Table(
   'product', metadata_obj,
   Column('id', Integer, primary_key=True),
   Column('name', String),
   Column('price', Integer),
   Column('updated', Date),
   Column('created', Date),
   Column('category_name', String),
)
