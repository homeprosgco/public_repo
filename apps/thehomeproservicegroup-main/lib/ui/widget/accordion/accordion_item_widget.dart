import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';

class AccordionItem extends StatefulWidget {
  final String title;
  final Widget content;

  const AccordionItem({super.key, required this.title, required this.content});

  @override
  // ignore: library_private_types_in_public_api
  _AccordionItemState createState() => _AccordionItemState();
}

class _AccordionItemState extends State<AccordionItem> {
  bool _isOpen = false;
  bool _isHovered = false;

  void _toggle() {
    setState(() {
      _isOpen = !_isOpen;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        MouseRegion(
          cursor: SystemMouseCursors.click,
          onEnter: (_) {
            setState(() {
              _isHovered = true;
            });
          },
          onExit: (_) {
            setState(() {
              _isHovered = false;
            });
          },
          child: ListTile(
            title: Text(
              widget.title,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: _isHovered ? Theme.of(context).colorScheme.primary : null,
                fontWeight: FontWeight.w600
              ),
            ),
            trailing: Icon(
              _isOpen ? Icons.expand_less : Icons.expand_more,
              color: _isHovered ? Theme.of(context).colorScheme.primary : null,
            ),
            onTap: _toggle,
            hoverColor: Colors.white,
          ),
        ),
        AnimatedContainer(
          alignment: Alignment.topLeft,
          padding: const EdgeInsets.only(left: k4),
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
          height: _isOpen ? null : 0,
          child: _isOpen ? widget.content : const SizedBox.shrink(),
        ),
      ],
    );
  }
}
