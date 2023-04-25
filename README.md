# product-api

## Getting Started

visit the live application here: https://nonye-product-api.cyclic.app/

To get list of appr0ved products, go to https://nonye-product-api.cyclic.app/approved-products?page=1
This will return the first 10 entries. to get the next set of entries, increase the page variable by 1

To get list of pending aproval products, go to https://nonye-product-api.cyclic.app/pending-products?page=1
This will return the first 10 entries. to get the next set of entries, increase the page variable by 1

To approve a product, go to https://nonye-product-api.cyclic.app/<sku>/approve.
Where sku is the unique value of a product .
example https://nonye-product-api.cyclic.app/006137913/approve
