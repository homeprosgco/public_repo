import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

class HeightUtil extends StatefulWidget {
  final Widget child;

  const HeightUtil({
    super.key,
    required this.child,
  });

  // Static method to access the scroll controller
  static void scrollToStart(GlobalKey<HeightUtilState> key) {
    key.currentState?.scrollToStart();
  }

  static void scrollToEnd(GlobalKey<HeightUtilState> key) {
    key.currentState?.scrollToEnd();
  }

  @override
  HeightUtilState createState() => HeightUtilState();
}

class HeightUtilState extends State<HeightUtil> {
  final ScrollController _scrollController = ScrollController();

  // Method to scroll to the start of the SingleChildScrollView
  void scrollToStart() {
    _scrollController.animateTo(
      0.0,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }

  // Method to scroll to the end of the SingleChildScrollView
  void scrollToEnd() {
    _scrollController.animateTo(
      _scrollController.position.maxScrollExtent,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.amber.shade50,
      width: max5XL,
      height: k48,
      child: Stack(
        children: [
          widget.child,
          Positioned(
            left: 20,
            child: SingleChildScrollView(
              controller: _scrollController,
              scrollDirection: Axis.horizontal,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: dimensions.map((dimension) {
                  final name = dimension['name'] as String;
                  final value = dimension['value'] as double;

                  return Padding(
                    padding: const EdgeInsets.only(right: k2),
                    child: Container(
                      width: 60,
                      color: Colors.grey.shade700,
                      height: value,
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
        ],
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}
