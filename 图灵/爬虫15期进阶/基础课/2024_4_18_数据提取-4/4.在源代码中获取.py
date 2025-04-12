import re

html_document = '''
<div class="el">
        <p class="t1">           
            <span>
                <a>Python开发工程师</a>
            </span>
        </p>
        <span class="t2">南京</span>
        <span class="t3">1.5-2万/月</span>
</div>
<div class="el">
        <p class="t1">
            <span>
                <a>java开发工程师</a>
            </span>
		</p>
        <span class="t2">苏州</span>
        <span class="t3">1.5-2/月</span>
</div>
'''

for temp in re.findall(r'class="t1">.*?<a>(.*?)</a>', html_document, re.DOTALL):
    print(temp)


