class ListStream:
    def __init__(self, my_list):
        self.list = my_list

    def filter(self, func):
        self.list = list(filter(func, self.list))
        return self

    def map(self, func):
        self.list = list(map(func, self.list))
        return self

    def for_each(self, func):
        list(map(func, self.list))
        return self

    def print(self):
        self.for_each(lambda item: print(item))
        return self

    def collect(self):
        return self.list
