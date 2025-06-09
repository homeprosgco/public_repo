import 'package:flutter/material.dart';

abstract class TableDataModel {
  Map<int, FractionColumnWidth> get columnWidths;
  List<String> get headers;
  List<List<Widget>> getDataRows();
  Map<String, String> get sortValues;
  List<String> get filterColumns;
  String get shellRoute;
  List<String> get ids;
}
