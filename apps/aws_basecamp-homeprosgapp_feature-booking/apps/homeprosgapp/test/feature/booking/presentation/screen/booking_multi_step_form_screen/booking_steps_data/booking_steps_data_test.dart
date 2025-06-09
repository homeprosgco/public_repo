import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

class MockBookingFormNotifier extends Mock implements BookingFormNotifier {}
class MockBookingEntity extends Mock implements BookingEntity {}

void main() {
  group('getStepsData', () {
    late MockBookingFormNotifier mockBookingNotifier;
    late MockBookingEntity mockBooking;

    setUp(() {
      mockBookingNotifier = MockBookingFormNotifier();
      mockBooking = MockBookingEntity();
    });

    test('returns list with correct data for each step', () {
      final stepsData = getStepsData(
        bookingNotifier: mockBookingNotifier,
        booking: mockBooking,
      );

      // Assert: Check each item in the list to ensure it contains expected values
      expect(stepsData.length, 9);

      // Check the data for each step
      expect(stepsData[0]['title'], "Let us know some details and we'll match you with Pros for you to compare");
      expect(stepsData[0]['body'], 'What service do you need?');
      expect(stepsData[0]['field'], 'service');
      expect(stepsData[0]['step'], isA<ProjectServiceStep>());

      expect(stepsData[1]['title'], 'What type of property is this?');
      expect(stepsData[1]['body'], 'We\'ll match you with local home repair professionals who have experience with your property type.');
      expect(stepsData[1]['field'], 'property_type');
      expect(stepsData[1]['step'], isA<PropertyTypeStep>());

      expect(stepsData[2]['title'], 'Choose the appropriate status for this project');
      expect(stepsData[2]['body'], '');
      expect(stepsData[2]['field'], 'hiring_stage');
      expect(stepsData[2]['step'], isA<HiringStageStep>());

      // Repeat the same assertions for the remaining steps

      expect(stepsData[3]['title'], 'What is the timeline for this project?');
      expect(stepsData[3]['field'], 'project_timeline');
      expect(stepsData[3]['step'], isA<ProjectTimelineStep>());

      expect(stepsData[4]['title'], 'What time of day do you prefer?');
      expect(stepsData[4]['field'], 'project_schedule_time');
      expect(stepsData[4]['step'], isA<ProjectScheduleTimeStep>());

      expect(stepsData[5]['title'], 'Are you currently the owner of this property?');
      expect(stepsData[5]['field'], 'ownership_status');
      expect(stepsData[5]['step'], isA<OwnershipStatusStep>());

      expect(stepsData[6]['title'], 'Can you share any details that will help us understand your project?');
      expect(stepsData[6]['field'], 'project_details');
      expect(stepsData[6]['step'], isA<ProjectDetailsStep>());

      expect(stepsData[7]['title'], 'Attach Plans and Photos');
      expect(stepsData[7]['field'], 'project_files');
      expect(stepsData[7]['step'], isA<ProjectFileUploadsStep>());

      expect(stepsData[8]['title'], 'Lastly, enter your contact details.');
      expect(stepsData[8]['field'], 'contact_details');
      expect(stepsData[8]['step'], isA<ContactDetailsStep>());
    });
  });
}
