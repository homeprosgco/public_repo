import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:go_router/go_router.dart';

import '../../../provider/core_providers.dart';
import '../../../theme/theme.dart';
import '../../layout/layout.dart';
import '../../widget/widget.dart';
import '../platform_widgets.dart';

class CustomDataTable extends ConsumerStatefulWidget {
  final TableDataModel tableModel;
  final PlatformDashboardViewHeaderViewModel viewHeader;
  final Map<String, List<String>> filterColumnOptions;
  final void Function(String query)? onSearch; // New callback for search
  final void Function(String field, bool ascending)? onSort; // New callback for sort
  final void Function(String entityId) onUpdate;
  final void Function(String entityId) onPreview;

  const CustomDataTable({
    super.key,
    required this.tableModel,
    required this.viewHeader,
    required this.filterColumnOptions,
    required this.onUpdate,
    required this.onPreview,
    this.onSearch,
    this.onSort,
  });

  @override
  CustomDataTableState createState() => CustomDataTableState();
}

class CustomDataTableState extends ConsumerState<CustomDataTable> {
  int _rowsPerPage = 10; // Default rows per page
  int _currentPage = 1; // Current page number
  String _filterColumnName = '';
  List<String> _filterColumnOptions = [];
  final List<int> _rowsPerPageOptions = [10, 20, 40];
  final TextEditingController _filterColumnOptionsController = TextEditingController();

  int get _totalRows => widget.tableModel.getDataRows().length;

  // Calculate the number of pages based on total rows
  int get _totalPages => (_totalRows / _rowsPerPage).ceil();

  // Display the current page rows
  List<List<Widget>> get _currentPageRows {
    final dataRows = widget.tableModel.getDataRows();
    int startIndex = (_currentPage - 1) * _rowsPerPage;

    if (dataRows.length < startIndex) {
      startIndex = 0;
      _goToPage(1);
    }
    final endIndex = startIndex + _rowsPerPage;

    return dataRows.sublist(startIndex, endIndex > dataRows.length ? dataRows.length : endIndex);
  }

  void _goToPage(int pageNumber) {
    setState(() {
      _currentPage = pageNumber.clamp(1, _totalPages); // Ensure within page range
    });
  }

  void _updateFilterColumnName(String? selectedColumnName) {
    if (widget.filterColumnOptions.isEmpty) {
      return;
    }

    _filterColumnOptionsController.clear();
    setState(() {
      if (selectedColumnName == 'Off') {
        ref.read(filterColumnProvider.notifier).filterOnColumn('');
        _filterColumnName = '';
      } else {
        _filterColumnName = selectedColumnName!;
        _filterColumnOptions = widget.filterColumnOptions[_filterColumnName]!;
      }
    });
  }

  void _filterRowsBy(String? selectedColumnOption) {
    ref.read(filterColumnProvider.notifier).filterOnColumn(selectedColumnOption!);
  }

  void _onCreateNew() {
    final createRoute = '${widget.tableModel.shellRoute}/new';
    context.go(createRoute);
  }

  void _onUpdate(String id) {
    widget.onUpdate(id);
  }

  void _onPreview(String id) {
    widget.onPreview(id);
  }

  @override
  void dispose() {
    _filterColumnOptionsController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final borderRadius = theme.extension<CustomThemeBorderRadius>();
    final colorScheme = theme.colorScheme;
    final isSortAscending = ref.watch(sortAscendingProvider);
    final searchQuery = ref.watch(searchQueryProvider);
    ref.watch(sortFieldProvider);

    return PlatformViewLayout(
      viewHeader: widget.viewHeader,
      viewHeaderChild: StackRow(
        spacing: const [k0, k0, k1, k1],
        children: [
          CustomThemeText(
            text: 'Showing ',
            fontWeight: FontWeight.w200,
            fontKey: FontKey.secondary,
            color: colorScheme.onSurfaceVariant,
            variant: TypographyVariant.bodySmall,
          ),
          Container(
            alignment: Alignment.center,
            width: k6,
            child: CustomThemeText(
              text: '${_currentPageRows.length}',
              fontWeight: FontWeight.w600,
              fontKey: FontKey.secondary,
              color: colorScheme.onSurfaceVariant,
              variant: TypographyVariant.bodySmall,
            ),
          ),
          CustomThemeText(
            text: 'of',
            fontWeight: FontWeight.w200,
            fontKey: FontKey.secondary,
            color: colorScheme.onSurfaceVariant,
            variant: TypographyVariant.bodySmall,
          ),
          Container(
            alignment: Alignment.center,
            width: k6,
            child: CustomThemeText(
              text: '$_totalRows',
              fontWeight: FontWeight.w600,
              fontKey: FontKey.secondary,
              color: colorScheme.onSurfaceVariant,
              variant: TypographyVariant.bodySmall,
            ),
          ),
          CustomThemeText(
            text: 'records',
            fontWeight: FontWeight.w200,
            fontKey: FontKey.secondary,
            color: colorScheme.onSurfaceVariant,
            variant: TypographyVariant.bodySmall,
          ),
        ],
      ),
      body: StackColumn(
        spacing: const [k4],
        children: [
          _buildTableDataController(
            child: Row(
              children: [
                _buildSearchInput(colorScheme, borderRadius!.xs),
                const Spacer(),
                StackRow(
                  spacing: const [k4, k4, k4],
                  children: [
                    _filterByColumnMenu(widget.tableModel),
                    _filterByColumnOptionsMenu(),
                    _sortDropdownMenu(
                      colorScheme,
                      widget.tableModel,
                      theme,
                      widget.onSort,
                      isSortAscending,
                      searchQuery,
                      ref,
                    ),
                    _buildCreateNewButton()
                  ],
                ),
              ],
            ),
          ),
          Expanded(
            child: _buildTable(
              colorScheme,
              children: [
                _buildTableHeader(colorScheme),
                Expanded(
                  child: _totalRows > 0
                      ? _buildTableRows(colorScheme)
                      : Container(
                          color: Colors.amber,
                          width: k64,
                          height: k64,
                        ),
                ),
              ],
            ),
          ),
        ],
      ),
      footer: _buildPageController(),
    );
  }

  void _showModal(BuildContext context) {
    showDialog(
      context: context,
      barrierDismissible: true, // User can dismiss the modal by tapping outside
      builder: (BuildContext context) {
        return Dialog(
          insetPadding: const EdgeInsets.all(0),
          child: Container(
            constraints: const BoxConstraints(maxWidth: max2XL),
            padding: const EdgeInsets.symmetric(horizontal: k36, vertical: k12),
            decoration: const BoxDecoration(color: white, borderRadius: BorderRadius.all(Radius.circular(k2))),
            child: StackColumn(
              spacing: const [k7, k5, k7],
              children: [
                FaIcon(
                  FontAwesomeIcons.circleXmark,
                  size: k20,
                  color: Theme.of(context).colorScheme.error,
                ),
                const CustomThemeText(
                  text: 'Are you sure?',
                  fontWeight: FontWeight.w600,
                  variant: TypographyVariant.titleLarge,
                  fontKey: FontKey.primary,
                ),
                const CustomThemeText(text: "You won't be able to revert this!"),
                StackRow(
                  spacing: const [k4],
                  children: [
                    Expanded(
                      child: CustomThemeButton(
                        keyName: 'delete_table_record',
                        color: 'primary',
                        borderRadius: 'rounded-xs',
                        onPressed: () {},
                        child: const CustomThemeText(
                          text: 'Yes, delete it!',
                          color: white,
                        ),
                      ),
                    ),
                    Expanded(
                      child: CustomThemeButton(
                        keyName: 'cancel_delete',
                        variant: 'text',
                        borderRadius: 'rounded-xs',
                        onPressed: () {},
                        child: CustomThemeText(
                          text: 'Cancel',
                          color: Theme.of(context).colorScheme.error,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildSearchInput(ColorScheme colorScheme, BorderRadius borderRadius) {
    return Container(
      constraints: const BoxConstraints(maxWidth: k64, maxHeight: k9),
      alignment: Alignment.centerLeft,
      child: TextField(
        decoration: InputDecoration(
          contentPadding: const EdgeInsets.symmetric(horizontal: 0, vertical: 0),
          hintText: 'Search...',
          hintStyle: TextStyle(
            fontSize: k4,
            color: colorScheme.onSurfaceVariant.withOpacity(.5),
          ),
          prefixIcon: const Icon(
            Icons.search,
            size: k5,
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: borderRadius,
            borderSide: BorderSide(
              color: colorScheme.onSurfaceVariant.withOpacity(.2),
            ),
          ),
        ),
        onChanged: (value) => ref.read(searchQueryProvider.notifier).searchQuery(value), // Trigger search callback on input change
      ),
    );
  }

  Widget _filterByColumnMenu(TableDataModel tableModel) {
    return StackRow(
      spacing: const [k2],
      children: [
        const Padding(
          padding: EdgeInsets.only(right: k2),
          child: CustomThemeText(
            text: 'Filter:',
            fontWeight: FontWeight.w600,
          ),
        ),
        DropdownMenu<String>(
          inputDecorationTheme: InputDecorationTheme(
            constraints: const BoxConstraints(maxHeight: k9),
            contentPadding: const EdgeInsets.symmetric(horizontal: k4, vertical: k2),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(k1),
              borderSide: BorderSide(color: Colors.grey.shade200),
            ),
          ),
          width: k64,
          trailingIcon: FaIcon(
            FontAwesomeIcons.angleDown,
            color: Colors.grey[900],
            size: k4,
          ),
          initialSelection: tableModel.filterColumns.first,
          onSelected: _updateFilterColumnName,
          dropdownMenuEntries: tableModel.filterColumns.map<DropdownMenuEntry<String>>(
            (String value) {
              return DropdownMenuEntry<String>(value: value, label: value);
            },
          ).toList(),
        ),
      ],
    );
  }

  Widget _filterByColumnOptionsMenu() {
    return StackRow(
      children: [
        DropdownMenu<String>(
          menuHeight: k80,
          controller: _filterColumnOptionsController,
          enabled: _filterColumnName.isNotEmpty,
          inputDecorationTheme: InputDecorationTheme(
            constraints: const BoxConstraints(maxHeight: k9),
            contentPadding: const EdgeInsets.symmetric(horizontal: k4, vertical: k2),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(k1),
              borderSide: BorderSide(color: Colors.grey.shade200),
            ),
            disabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(k1),
              borderSide: BorderSide(color: Colors.grey.shade200),
            ),
          ),
          width: k64,
          trailingIcon: FaIcon(
            FontAwesomeIcons.angleDown,
            color: Colors.grey[900],
            size: k4,
          ),
          initialSelection: _filterColumnName,
          onSelected: _filterRowsBy,
          dropdownMenuEntries: _filterColumnOptions.map<DropdownMenuEntry<String>>(
            (String value) {
              return DropdownMenuEntry<String>(
                value: value,
                label: value,
              );
            },
          ).toList(),
        ),
      ],
    );
  }

  MenuAnchor _sortDropdownMenu(
    ColorScheme colorScheme,
    TableDataModel tableModel,
    ThemeData theme,
    Function(String field, bool ascending)? onSort,
    bool isSortAscending,
    String searchQuery,
    WidgetRef ref,
  ) {
    return MenuAnchor(
      // alignmentOffset: Offset(-64, 0),
      builder: (context, controller, child) {
        return CustomThemeButton(
          paddingSize: 'small',
          variant: 'outlined',
          keyName: 'sort_table_data',
          onPressed: () {
            if (controller.isOpen) {
              controller.close();
            } else {
              controller.open();
            }
          },
          iconPosition: 'end',
          icon: FaIcon(
            FontAwesomeIcons.angleDown,
            color: colorScheme.primary,
            size: k3,
          ),
          borderRadius: 'rounded-sm',
          child: Padding(
            padding: const EdgeInsets.only(right: k2_5),
            child: CustomThemeText(
              text: 'Sort By',
              variant: TypographyVariant.labelMedium,
              color: colorScheme.primary,
            ),
          ),
        );
      },
      menuChildren: [
        Container(
          width: k48,
          height: k6,
          padding: const EdgeInsets.only(left: k2),
          child: const CustomThemeText(
            text: 'Sort Columns',
            variant: TypographyVariant.labelMedium,
            fontWeight: FontWeight.w700,
            fontKey: FontKey.primary,
          ),
        ),
        ...tableModel.sortValues.keys.map(
          (key) {
            return MenuItemButton(
              onPressed: () => ref.read(sortFieldProvider.notifier).updateSortField(tableModel.sortValues[key]!),
              child: SizedBox(
                width: k40,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: k2, horizontal: k3),
                  child: StackRow(
                    children: [
                      Expanded(
                        child: Text(
                          key,
                          style: theme.textTheme.labelMedium?.copyWith(
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      if (ref.read(sortFieldProvider) == tableModel.sortValues[key])
                        Icon(
                          Icons.radio_button_checked_sharp,
                          size: k4,
                          color: colorScheme.primary,
                        )
                    ],
                  ),
                ),
              ),
            );
          },
        ),
        const Divider(height: k9),
        Container(
          width: k48,
          height: k6,
          padding: const EdgeInsets.only(left: k2),
          child: const CustomThemeText(
            text: 'Sort Order',
            variant: TypographyVariant.labelMedium,
            fontWeight: FontWeight.w700,
            fontKey: FontKey.primary,
          ),
        ),
        MenuItemButton(
          onPressed: () => ref.read(sortAscendingProvider.notifier).updateSortOrder(true),
          child: SizedBox(
            width: k40,
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: k0, horizontal: k3),
              child: StackRow(
                children: [
                  Expanded(
                    child: Text(
                      'ASC',
                      style: theme.textTheme.labelMedium?.copyWith(
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  if (ref.read(sortAscendingProvider))
                    Icon(
                      Icons.radio_button_checked_sharp,
                      size: k5,
                      color: colorScheme.primary,
                    ),
                ],
              ),
            ),
          ),
        ),
        MenuItemButton(
          onPressed: () => ref.read(sortAscendingProvider.notifier).updateSortOrder(false),
          child: SizedBox(
            width: k40,
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: k0, horizontal: k3),
              child: StackRow(
                children: [
                  Expanded(
                    child: Text(
                      'DESC',
                      style: theme.textTheme.labelMedium?.copyWith(
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  if (ref.read(sortAscendingProvider) == false)
                    Icon(
                      Icons.radio_button_checked_sharp,
                      size: k4,
                      color: colorScheme.primary,
                    ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildCreateNewButton() {
    return Container(
      constraints: const BoxConstraints(maxWidth: k10),
      alignment: Alignment.center,
      child: CustomThemeButton(
        paddingSize: 'custom',
        customPadding: const EdgeInsets.all(k0),
        keyName: 'add_form_button',
        onPressed: _onCreateNew,
        icon: const Icon(
          Icons.add,
          size: k4,
        ),
        borderRadius: 'rounded-sm',
      ),
    );
  }

  Widget _buildTableDataController({required Widget child}) {
    return PlatformContainer(child: child);
  }

  Widget _buildTable(ColorScheme colorScheme, {required List<Widget> children}) {
    return PlatformContainer(
      child: StackColumn(
        horizontalAlignment: CrossAxisAlignment.start,
        spacing: const [k0, k4, k4],
        children: children,
      ),
    );
  }

  Table _buildTableHeader(ColorScheme colorScheme) {
    return Table(
      columnWidths: {
        0: const FractionColumnWidth(.04),
        ...widget.tableModel.columnWidths,
      },
      defaultVerticalAlignment: TableCellVerticalAlignment.middle,
      children: [
        // Header Row
        TableRow(
          decoration: BoxDecoration(
            border: Border(
              bottom: BorderSide(color: Colors.grey.shade100),
            ),
          ),
          children: [
            const SizedBox.shrink(),
            ...widget.tableModel.headers.map(
              (header) {
                return GestureDetector(
                  onTap: () {
                    // Handle sorting logic on header tap
                    final currentSortAscending = ref.read(sortAscendingProvider);
                    widget.onSort?.call(header, !currentSortAscending);
                  },
                  child: _headerTableCell(text: header, colorScheme),
                );
              },
            ),
            _headerTableCell(colorScheme, text: 'ACTIONS')
          ],
        ),
      ],
    );
  }

  Widget _headerTableCell(ColorScheme? colorScheme, {required String text}) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(k2, k0, k2, k2),
      child: CustomThemeText(
        text: text,
        fontKey: FontKey.primary,
        fontWeight: FontWeight.w800,
        color: colorScheme?.onSurface.withOpacity(.85),
      ),
    );
  }

  Widget _buildTableRows(ColorScheme colorScheme) {
    return SingleChildScrollView(
      child: Table(
        columnWidths: widget.tableModel.columnWidths,
        defaultVerticalAlignment: TableCellVerticalAlignment.middle,
        children: [
          // Data Rows for current page
          ..._currentPageRows.asMap().entries.map(
            (row) {
              int startingIndex = (_currentPage - 1) * _rowsPerPage;

              return TableRow(
                decoration: BoxDecoration(
                  border: Border(
                    bottom: BorderSide(color: Colors.grey.shade100),
                  ),
                ),
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: k2, vertical: k3),
                    child: CustomThemeText(
                      text: ((startingIndex + row.key + 1)).toString(),
                      color: colorScheme.onSurfaceVariant.withOpacity(.7),
                      variant: TypographyVariant.labelSmall,
                    ),
                  ),
                  ...row.value.map((item) => _dataTableCell(child: item)),
                  StackRow(
                    children: [
                      Expanded(
                        child: IconButton(
                          onPressed: () => _onPreview(widget.tableModel.ids[row.key]),
                          icon: const FaIcon(FontAwesomeIcons.eye, size: k4),
                          hoverColor: const Color(0xFFF2F3F7).withOpacity(.1),
                        ),
                      ),
                      Expanded(
                        child: IconButton(
                          onPressed: () => _onUpdate(widget.tableModel.ids[row.key]),
                          icon: const FaIcon(
                            FontAwesomeIcons.penToSquare,
                            size: k4,
                            color: Color(0xFFF1C40F),
                          ),
                          hoverColor: const Color(0xFFF2F3F7).withOpacity(.1),
                        ),
                      ),
                      Expanded(
                        child: IconButton(
                          onPressed: () => _showModal(context),
                          icon: const FaIcon(FontAwesomeIcons.trashCan, size: k4, color: Color(0xFFD72A1D)),
                          hoverColor: const Color(0xFFF2F3F7).withOpacity(.1),
                        ),
                      ),
                    ],
                  ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _dataTableCell({required Widget child}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: k2, vertical: k3),
      child: child,
    );
  }

  Widget _buildPageController() {
    return Container(
      color: white,
      padding: const EdgeInsets.all(k4),
      child: Row(
        // mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _rowsPerPageController(),
          const Spacer(),
          _goToPageController(),
        ],
      ),
    );
  }

  Widget _rowsPerPageController() {
    return StackRow(
      children: [
        const Padding(
          padding: EdgeInsets.only(right: k2),
          child: Text('Rows per page:'),
        ),
        DropdownMenu<int>(
          inputDecorationTheme: InputDecorationTheme(
            constraints: const BoxConstraints(maxHeight: k9),
            contentPadding: const EdgeInsets.symmetric(horizontal: k2, vertical: k2),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(k1),
              borderSide: BorderSide(color: Colors.grey.shade200),
            ),
          ),
          width: k20,
          trailingIcon: FaIcon(
            FontAwesomeIcons.angleDown,
            color: Colors.grey[900],
            size: k4,
          ),
          initialSelection: _rowsPerPageOptions.first,
          onSelected: (newValue) {
            setState(() {
              _rowsPerPage = newValue!;
              _currentPage = 1; // Reset to page 1 on rows per page change
            });
          },
          dropdownMenuEntries: _rowsPerPageOptions.map<DropdownMenuEntry<int>>((int value) {
            return DropdownMenuEntry<int>(value: value, label: value.toString());
          }).toList(),
        ),
      ],
    );
  }

  Widget _goToPageController() {
    if (_totalRows == 0) {
      return const Padding(
        padding: EdgeInsets.all(8.0),
        child: CustomThemeText(text: 'No records found'),
      );
    }

    final startRow = (_currentPage - 1) * _rowsPerPage + 1;
    final endRow = (_currentPage * _rowsPerPage).clamp(1, _totalRows);

    return StackRow(
      mainAxisAlignment: MainAxisAlignment.end,
      spacing: const [k4],
      children: [
        CustomThemeText(text: '$startRow - $endRow of $_totalRows'),
        SizedBox(
          width: maxMD,
          child: Opacity(
            opacity: (_rowsPerPage < _totalRows) ? 1 : .1,
            child: StackRow(
              spacing: const [k2, k2, k6, k4],
              children: [
                IconButton(
                  icon: const Icon(Icons.chevron_left),
                  onPressed: _currentPage > 1 ? () => _goToPage(_currentPage - 1) : null,
                ),
                StackRow(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ..._buildPageButtons(),
                  ],
                ),
                IconButton(
                  icon: const Icon(Icons.chevron_right),
                  onPressed: _currentPage < _totalPages ? () => _goToPage(_currentPage + 1) : null,
                ),
                const CustomThemeText(text: 'Go to page'),
                Container(
                  padding: const EdgeInsets.only(left: k4),
                  width: k12,
                  child: TextField(
                    decoration: InputDecoration(
                      constraints: const BoxConstraints(maxHeight: k9),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(k1),
                        borderSide: BorderSide(color: Colors.grey.shade200),
                      ),
                      contentPadding: const EdgeInsets.symmetric(vertical: k2, horizontal: k2),
                    ),
                    keyboardType: TextInputType.number,
                    onSubmitted: (value) {
                      final pageNumber = int.tryParse(value) ?? 1;
                      if (pageNumber > 0 && pageNumber <= _totalPages) {
                        setState(() {
                          _currentPage = pageNumber;
                        });
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
        )
      ],
    );
  }

  List<Widget> _buildPageButtons() {
    List<Widget> pageButtons = [];
    final int totalPages = _totalPages;
    final int currentPage = _currentPage;

    if (totalPages < 6) {
      for (int i = 0; i < totalPages; i++) {
        pageButtons.add(_buildPageButton(i));
      }
    } else if (totalPages > 6) {
      if ((currentPage + 4) == totalPages) {
        for (int i = currentPage; i <= totalPages; i++) {
          pageButtons.add(_buildPageButton(i - 1));
        }
      } else if (currentPage == totalPages) {
        final List<Widget> buttonList = [];
        for (int i = totalPages; i > 0; i--) {
          buttonList.add(_buildPageButton(i - 1));

          if (i == (totalPages - 2)) {
            buttonList.add(
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 4.0),
                child: Text('...'),
              ),
            );
            buttonList.add(_buildPageButton(2));
            pageButtons.addAll(buttonList.reversed);
          }
        }
      } else if (currentPage > (totalPages - 4)) {
        final count = totalPages - currentPage;
        for (int i = 0; i < count; i++) {
          pageButtons.add(_buildPageButton(currentPage + i));

          if (i == (count - 1)) {
            final emptyButtonsCount = 4 - pageButtons.length;

            List.generate(emptyButtonsCount, (index) {
              pageButtons.insert(index, _buildPageButton(index));
            });

            pageButtons.insert(
              emptyButtonsCount,
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 4.0),
                child: Text('...'),
              ),
            );
          }
        }
      } else {
        for (int i = currentPage; i < totalPages; i++) {
          pageButtons.add(_buildPageButton(i));

          if (pageButtons.length > 2) {
            pageButtons.add(
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 4.0),
                child: Text('...'),
              ),
            );
            pageButtons.add(_buildPageButton(totalPages - 1));

            break;
          }
        }
      }
    }

    return pageButtons;
  }

  Widget _buildPageButton(int pageNumber) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: Container(
        padding: const EdgeInsets.all(8.0),
        child: GestureDetector(
          onTap: () => _goToPage(pageNumber + 1),
          child: Text(
            '${pageNumber + 1}',
            style: TextStyle(
              fontWeight: _currentPage == pageNumber + 1 ? FontWeight.bold : FontWeight.normal,
            ),
          ),
        ),
      ),
    );
  }
}
