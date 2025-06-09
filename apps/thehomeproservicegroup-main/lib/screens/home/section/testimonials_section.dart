import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class TestimonialsSection extends StatelessWidget {
  final ThemeData theme;

  const TestimonialsSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k9,
      children: [
        ResponsiveRowColumnItem(
          child: buildSectionHeader(
            theme,
            spacing: k2,
            crossAxisAlignment: CrossAxisAlignment.center,
            header: 'Testimonials',
            body: "Here's what our customers are saying.",
          ),
        ),
        const ResponsiveRowColumnItem(
          child: _ReviewCarouselWithIndicator(),
        ),
      ],
    );
  }
}

class _ReviewCarouselWithIndicator extends StatefulWidget {
  const _ReviewCarouselWithIndicator();

  @override
  State<StatefulWidget> createState() {
    return _CarouselWithIndicatorState();
  }
}

class _CarouselWithIndicatorState extends State<_ReviewCarouselWithIndicator> {
  int _current = 0;
  final CarouselController _controller = CarouselController();

  final List<ReviewData> reviews = [
    ReviewData(
      rating: 5,
      reviewText: 'Excellent Work',
      reviewDescription: 'The team repaired my roof perfectly. They were efficient, professional, and left everything spotless. Highly recommended!',
      userName: 'Alice Smith',
      userTitle: 'Homeowner',
      userImage: 'images/review_avatars/customer_review_four.png',
    ),

    ReviewData(
      rating: 5,
      reviewText: 'Highly Recommend',
      reviewDescription: 'The plumbing repairs were done swiftly and effectively. I appreciate the attention to detail and the friendly service provided.',
      userName: 'Bob Johnson',
      userTitle: 'Tenant',
      userImage: 'images/review_avatars/customer_review_one.png',
    ),

    ReviewData(
      rating: 5,
      reviewText: 'Great Service',
      reviewDescription: 'They fixed my electrical issues quickly and efficiently. The technician was knowledgeable and courteous throughout the process.',
      userName: 'Cathy Lee',
      userTitle: 'Property Manager',
      userImage: 'images/review_avatars/customer_review_two.png',
    ),

    ReviewData(
      rating: 5,
      reviewText: 'Very Professional',
      reviewDescription: 'The home repair team was prompt and did a fantastic job on my kitchen renovation. Excellent craftsmanship and attention to detail.',
      userName: 'David Brown',
      userTitle: 'Homeowner',
      userImage: 'images/review_avatars/customer_review_three.png',
    ),

    ReviewData(
      rating: 5,
      reviewText: 'Outstanding Job',
      reviewDescription: 'The team handled my bathroom remodel with great expertise. The result is stunning, and the process was smooth and stress-free.',
      userName: 'Eve Martin',
      userTitle: 'Landlord',
      userImage: 'images/review_avatars/customer_review_five.png',
    ),
    // Add more ReviewData instances as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CarouselSlider(
          items: reviews.map((review) {
            return Builder(
              builder: (BuildContext context) {
                return ReviewCard(
                  rating: review.rating,
                  reviewText: review.reviewText,
                  reviewDescription: review.reviewDescription,
                  userName: review.userName,
                  userTitle: review.userTitle,
                  userImage: review.userImage,
                );
              },
            );
          }).toList(),
          carouselController: _controller,
          options: CarouselOptions(
            autoPlay: false,
            enlargeCenterPage: false,
            height: k72,
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
          children: reviews.asMap().entries.map((entry) {
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
