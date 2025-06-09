import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/util/util.dart';

class ReviewCard extends StatelessWidget {
  final int rating;
  final String reviewText;
  final String reviewDescription;
  final String userName;
  final String userTitle;
  final String userImage;

  const ReviewCard({
    super.key,
    required this.rating,
    required this.reviewText,
    required this.reviewDescription,
    required this.userName,
    required this.userTitle,
    required this.userImage,
  });

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return Container(
      margin: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: EdgeInsets.zero,
        md: const EdgeInsets.only(right: k4),
      ),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey.shade300),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(k4, k6, k4, k0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: List.generate(rating, (index) {
                return const Icon(Icons.star, color: Colors.amber, size: 20);
              }),
            ),
            const SizedBox(height: 8),
            Text(
              reviewText,
              style: theme.textTheme.bodyLarge?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: k4),
            SizedBox(
              height: k20,
              child: AutoSizeText(
                reviewDescription,
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                ),
                maxLines: 5,
              ),
            ),
            const SizedBox(height: k5),
            Divider(
              height: 1,
              color: Colors.grey.shade300,
            ),
            const SizedBox(height: k5),
            Row(
              children: [
                CircleAvatar(
                  backgroundImage: AssetImage(userImage),
                  radius: 24,
                ),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      userName,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    AutoSizeText(
                      userTitle,
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.grey[600],
                      ),
                      maxLines: 1,
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class ReviewData {
  final int rating;
  final String reviewText;
  final String reviewDescription;
  final String userName;
  final String userTitle;
  final String userImage;

  ReviewData({
    required this.rating,
    required this.reviewText,
    required this.reviewDescription,
    required this.userName,
    required this.userTitle,
    required this.userImage,
  });
}
