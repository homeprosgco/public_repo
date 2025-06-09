import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/const/app_consts.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

class AllServicesScreen extends StatelessWidget {
  const AllServicesScreen({super.key});

  List<List<Service>> _splitListIntoChunks(List<Service> list, int numberOfChunks) {
    int chunkSize = (list.length / numberOfChunks).ceil();
    List<List<Service>> chunks = [];
    for (var i = 0; i < list.length; i += chunkSize) {
      chunks.add(list.sublist(i, i + chunkSize > list.length ? list.length : i + chunkSize));
    }
    return chunks;
  }

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    int numberOfColumns = 3; // Number of columns you want
    List<List<Service>> chunkedEntries = _splitListIntoChunks(servicesList, numberOfColumns);

    return Screen(
      theme: theme,
      children: [
        buildHeader(context),
        const SizedBox(height: k8),
        PageSection(
          children: [
            ResponsiveRowColumnItem(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AutoSizeText(
                    'Services near me',
                    style: theme.textTheme.titleMedium,
                  ),
                  const SizedBox(height: k4),
                  AutoSizeText(
                    'Discover local home services available in your area, from repairs to maintenance, just a click away.',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey[600],
                    ),
                  ),
                  const SizedBox(height: k8),
                ],
              ),
            ),
            ...chunkedEntries.map((chunk) {
              return ResponsiveRowColumnItem(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: chunk.map((service) {
                    return Padding(
                      padding: const EdgeInsets.symmetric(vertical: 8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            service.service,
                            style: const TextStyle(
                              fontSize: 16,
                            ),
                          ),
                          Text(
                            service.professional,
                            style: theme.textTheme.labelMedium?.copyWith(
                              fontSize: 12,
                              color: Colors.grey[400],
                              fontWeight: FontWeight.w300,
                            ),
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                ),
              );
            })
          ],
        ),
      ],
    );
  }
}
