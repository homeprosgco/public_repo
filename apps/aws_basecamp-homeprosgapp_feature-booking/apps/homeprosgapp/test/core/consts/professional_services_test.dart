import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('Service List Tests', () {
    test('should contain all professional services as a list of strings', () {
      expect(professionalServices.isNotEmpty, isTrue);
      expect(professionalServices.first, 'A-Frame Home Builders');
      expect(professionalServices.contains('AC Installation Companies'), isTrue);
    });

    test('should contain unique professional categories', () {
      expect(professionalCategories.isNotEmpty, isTrue);
      expect(professionalCategories.length, professionalCategoriesCount);
      expect(professionalCategories.contains('HVAC Technician'), isTrue);
      expect(professionalCategories.contains('Plumber'), isTrue);
    });

    test('should verify professional categories count matches the actual unique count', () {
      final uniqueCategoriesCount = servicesList.map((service) => service.professional).toSet().length;
      expect(professionalCategoriesCount, uniqueCategoriesCount);
    });

    test('should correctly sort professional services alphabetically by service name', () {
      // Act: Sort the services list
      final List<Service> sortedProfessionalServices = getSortedServicesByServiceName(servicesList);

      // Assert: Verify the list is sorted alphabetically by the service name
      for (int i = 0; i < sortedProfessionalServices.length - 1; i++) {
        expect(
          sortedProfessionalServices[i].service.compareTo(sortedProfessionalServices[i + 1].service) <= 0,
          isTrue,
          reason: 'The list is not sorted alphabetically at index $i',
        );
      }
    });
  });
}
