import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/util/responsive_util.dart';

class JobImagesCarouselWithIndicator extends StatefulWidget {
  final List<String> jobImages;

  const JobImagesCarouselWithIndicator({
    super.key,
    required this.jobImages,
  });

  @override
  State<StatefulWidget> createState() {
    return _CarouselWithIndicatorState();
  }
}

class _CarouselWithIndicatorState extends State<JobImagesCarouselWithIndicator> {
  int _current = 0;
  final CarouselController _controller = CarouselController();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CarouselSlider(
          items: widget.jobImages.map((image) {
            return LayoutBuilder(
              builder: (context, constraints) {
                return Container(
                  padding: const EdgeInsets.only(right: k4),
                  child: ClipRRect(
                    borderRadius: const BorderRadius.all(Radius.circular(k5)),
                    child: Image.asset(
                      image,
                      fit: BoxFit.fill,
                      width: double.infinity,
                    ),
                  ),
                );
              },
            );
          }).toList(),
          carouselController: _controller,
          options: CarouselOptions(
            autoPlay: false,
            enlargeCenterPage: false,
            height: k52,
            initialPage: 0,
            padEnds: false,
            viewportFraction: ResponsiveUtil.responsiveValue(
              context: context,
              defaultValue: 1,
              md: .5,
            ),
            onPageChanged: (index, reason) {
              setState(() {
                _current = index;
              });
            },
          ),
        ),
        const SizedBox(height: k8),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: widget.jobImages.asMap().entries.map((entry) {
            return GestureDetector(
              onTap: () => _controller.animateToPage(entry.key),
              child: Container(
                width: 12.0,
                height: 12.0,
                margin: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 4.0),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black).withOpacity(
                    _current == entry.key ? 0.9 : 0.4,
                  ),
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }
}
