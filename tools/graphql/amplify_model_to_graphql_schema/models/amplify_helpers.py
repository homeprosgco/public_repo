from .amplify_field import AmplifyField, AmplifyOperation
from typing import List


class a:
    @staticmethod
    def id():
        return AmplifyField("ID").required()

    @staticmethod
    def string():
        return AmplifyField("String")

    @staticmethod
    def float():
        return AmplifyField("Float")

    @staticmethod
    def integer():
        return AmplifyField("Int")

    @staticmethod
    def boolean():
        return AmplifyField("Boolean")

    @staticmethod
    def datetime():
        return AmplifyField("AWSDateTime")

    @staticmethod
    def date():
        return AmplifyField("AWSDate")

    @staticmethod
    def json():
        return AmplifyField("AWSJSON")

    @staticmethod
    def email():
        return AmplifyField("String")

    @staticmethod
    def url():
        return AmplifyField("String")

    @staticmethod
    def phone():
        return AmplifyField("String")

    @staticmethod
    def enum(name: str, values: list[str]):
        print(name)
        return AmplifyField(name, enum_values=values)

    @staticmethod
    def ref(model_name: str):
        print(model_name)
        enum_values = EnumRegistry.get(model_name)
        return AmplifyField(model_name, is_reference=True, enum_values=enum_values)

    @staticmethod
    def hasMany(model_name: str):
        return AmplifyField(model_name, is_array=True).with_relationship("hasMany")

    @staticmethod
    def hasOne(model_name: str):
        return AmplifyField(model_name).with_relationship("hasOne")

    @staticmethod
    def belongsTo(model_name: str):
        return AmplifyField(model_name).with_relationship("belongsTo")

    @staticmethod
    def query():
        return AmplifyOperation("query")

    @staticmethod
    def mutation():
        return AmplifyOperation("mutation")

class EnumRegistry:
    _enums: dict[str, list[str]] = {}

    @classmethod
    def register(cls, name: str, values: list[str]):
        cls._enums[name] = values

    @classmethod
    def get(cls, name: str) -> list[str] | None:
        return cls._enums.get(name)

    @classmethod
    def all(cls):
        return cls._enums.copy()

