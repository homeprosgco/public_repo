from typing import List


class AmplifyField:
    def __init__(
        self,
        field_type: str,
        is_array=False,
        is_required=False,
        enum_values: List[str] = None,
        is_reference=False,
        relationship_type=None,
    ):
        self.field_type = field_type
        self.is_array = is_array
        self.is_required = is_required
        self.enum_values = enum_values
        self.is_reference = is_reference
        self.relationship_type = relationship_type

    def array(self):
        self.is_array = True
        return self

    def required(self):
        self.is_required = True
        return self

    def default(self, _value):
        return self

    def with_relationship(self, relationship_type):
        self.is_reference = True
        self.relationship_type = relationship_type
        return self


class AmplifyOperation:
    def __init__(self, op_type: str):
        self.op_type = op_type
        self._args = {}
        self._returns = None
        self._is_admin = False

    def arguments(self, args: dict):
        self._args = args
        return self

    def returns(self, return_type):
        self._returns = return_type
        return self

    def admin(self):
        self._is_admin = True
        return self
