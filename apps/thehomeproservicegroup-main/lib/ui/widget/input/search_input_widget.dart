import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/util/responsive_util.dart';

class SearchInput extends StatelessWidget {
  final ThemeData theme;
  const SearchInput({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {

    return Container(
      constraints: const BoxConstraints(maxWidth: max2XL),
      margin: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: const EdgeInsets.only(top: k6),
        md: const EdgeInsets.only(top: k12),
      ),
      padding: const EdgeInsets.symmetric(horizontal: k2_5, vertical: k1),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 2,
            blurRadius: 5,
            offset: const Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(left: k4),
              child: TextField(
                style: theme.textTheme.bodySmall,
                decoration: const InputDecoration(
                  hintText: 'Find Your Services Here',
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(right: k2),
            decoration: BoxDecoration(
              color: theme.colorScheme.primary,
              borderRadius: BorderRadius.circular(30),
            ),
            child: IconButton(
              icon: const Icon(Icons.search, color: Colors.white),
              onPressed: () {
                // Add your search functionality here
              },
            ),
          ),
        ],
      ),
    );
  }
}
