import '../../../../domain/booking_domain.dart';
import '../../../provider/booking_providers.dart';
import '../booking_steps/booking_steps.dart';

// Function to return the steps data, accepting bookingNotifier and booking as parameters
List<Map<String, dynamic>> getStepsData({
  required BookingFormNotifier bookingNotifier,
  required BookingEntity booking,
}) {
  return [
    {
      'title': "Let us know some details and we'll match you with Pros for you to compare",
      'body': 'What service do you need?',
      'field': 'service',
      'step': ProjectServiceStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'What type of property is this?',
      'body': 'We\'ll match you with local home repair professionals who have experience with your property type.',
      'field': 'property_type',
      'step': PropertyTypeStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'Choose the appropriate status for this project',
      'body': '',
      'field': 'hiring_stage',
      'step': HiringStageStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'What is the timeline for this project?',
      'body': '',
      'field': 'project_timeline',
      'step': ProjectTimelineStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'What time of day do you prefer?',
      'body': '',
      'field': 'project_schedule_time',
      'step': ProjectScheduleTimeStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'Are you currently the owner of this property?',
      'body': '',
      'field': 'ownership_status',
      'step': OwnershipStatusStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'Can you share any details that will help us understand your project?',
      'body': 'Tell us more about your project, including any important circumstances. This helps us find the best matches for you.',
      'field': 'project_details',
      'step': ProjectDetailsStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
    {
      'title': 'Attach Plans and Photos',
      'body':
          'Upload photos or plans to help us better understand your project and provide accurate quotes. This will ensure you get tailored services that fit your needs.',
      'field': 'project_files',
      'step': const ProjectFileUploadsStep(),
    },
    {
      'title': 'Lastly, enter your contact details.',
      'body': 'We’ll send your cost report to the provided email.',
      'field': 'contact_details',
      'step': ContactDetailsStep(
        bookingNotifier: bookingNotifier,
        booking: booking,
      ),
    },
  ];
}
