import json
from pprint import pprint

def sg_json_print(obj):
    print(json.dumps(obj, indent=2, ensure_ascii=False))

def sg_pprint(data):
    pprint(data)