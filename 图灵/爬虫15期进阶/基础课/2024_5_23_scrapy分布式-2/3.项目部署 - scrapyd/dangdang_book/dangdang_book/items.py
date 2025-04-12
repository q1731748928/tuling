# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DangdangBookItem(scrapy.Item):
    title = scrapy.Field()
    price = scrapy.Field()
    author = scrapy.Field()
    date_data = scrapy.Field()
    detail = scrapy.Field()
    producer = scrapy.Field()
