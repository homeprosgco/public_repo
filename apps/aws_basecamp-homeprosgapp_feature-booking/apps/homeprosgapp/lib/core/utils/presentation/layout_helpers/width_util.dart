import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

class WidthUtil extends StatelessWidget {
  final Widget child;

  const WidthUtil({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green.shade50,
      width: maxLG,
      // height: k48,
      child: Stack(
        alignment: Alignment.topLeft,
        children: [
          child,
          Positioned(
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: dimensions.map((dimension) {
                  final name = dimension['name'] as String;
                  final value = dimension['value'] as double;

                  return Padding(
                    padding: const EdgeInsets.only(bottom: k2),
                    child: Container(
                      width: value, // Adjust width as needed
                      color: Colors.grey.shade700,
                      height: k4,
                      alignment: Alignment.center,
                      child: Text(
                        name,
                        style: const TextStyle(color: Colors.white, fontSize: 10),
                      ),
                    ),
                  );
                }).toList(),
              ),
            ),
          ),
          // child,
        ],
      ),
    );
  }
}
