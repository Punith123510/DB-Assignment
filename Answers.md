(1)The relationship between the "Product" and "Product_Category" entities is one of association or dependency. In the "Product" table, the "category_id" attribute serves as a foreign key 
referencing the "id" attribute in the "Product_Category" table. This indicates that each product belongs to a specific category defined in the "Product_Category" table.
It's a many-to-one relationship, where many products can belong to one category.

(2)To ensure that each product in the "Product" table has a valid category assigned to it, you can enforce referential integrity constraints in the database. This means that the "category_id" 
column in the "Product" table should only contain values that exist in the "id" column of the "Product_Category" table. This can be achieved by defining a foreign key constraint on the "category_id" 
column in the "Product" table, referencing the "id" column in the "Product_Category" table. With this constraint in place, the database will reject any attempts to insert or update a product with a 
category ID that does not exist in the "Product_Category" table, ensuring that each product has a valid category assigned to it.
