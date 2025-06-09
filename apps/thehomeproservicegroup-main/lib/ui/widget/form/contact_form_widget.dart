import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';

class ContactForm extends StatefulWidget {
  const ContactForm({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _ContactFormState createState() => _ContactFormState();
}

class _ContactFormState extends State<ContactForm> {
  final _formKey = GlobalKey<FormState>();

  // Controllers for text fields
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // Process data
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Form submitted'),
        ),
      );
      // Clear the form
      _firstNameController.clear();
      _lastNameController.clear();
      _emailController.clear();
      _messageController.clear();
    }
  }

  OutlineInputBorder _buildBorder(Color color) {
    return OutlineInputBorder(
      borderSide: BorderSide(color: color, width: k1px),
      borderRadius: BorderRadius.circular(10.0),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextFormField(
            controller: _firstNameController,
            decoration: InputDecoration(
              labelText: 'First Name',
              labelStyle: const TextStyle(fontSize: k4),
              enabledBorder: _buildBorder(const Color(0xFFded7e9)),
              focusedBorder: _buildBorder(Colors.blue),
              errorBorder: _buildBorder(Colors.red),
              focusedErrorBorder: _buildBorder(Colors.red),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your first name';
              }
              return null;
            },
          ),
          const SizedBox(height: k5),
          TextFormField(
            controller: _lastNameController,
            decoration: InputDecoration(
              labelText: 'Last Name',
              labelStyle: const TextStyle(fontSize: k4),
              enabledBorder: _buildBorder(const Color(0xFFded7e9)),
              focusedBorder: _buildBorder(Colors.blue),
              errorBorder: _buildBorder(Colors.red),
              focusedErrorBorder: _buildBorder(Colors.red),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your last name';
              }
              return null;
            },
          ),
          const SizedBox(height: k5),
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(
              labelText: 'Your Email',
              labelStyle: const TextStyle(fontSize: k4),
              enabledBorder: _buildBorder(const Color(0xFFded7e9)),
              focusedBorder: _buildBorder(Colors.blue),
              errorBorder: _buildBorder(Colors.red),
              focusedErrorBorder: _buildBorder(Colors.red),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your email';
              } else if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            },
          ),
          const SizedBox(height: k5),
          TextFormField(
            controller: _messageController,
            decoration: InputDecoration(
              labelText: 'Your Message',
              labelStyle: const TextStyle(fontSize: k4),
              enabledBorder: _buildBorder(const Color(0xFFded7e9)),
              focusedBorder: _buildBorder(Colors.blue),
              errorBorder: _buildBorder(Colors.red),
              focusedErrorBorder: _buildBorder(Colors.red),
            ),
            maxLines: 4,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your message';
              }
              return null;
            },
          ),
          const SizedBox(height: k12),
          PrimaryButton(
            backgroundColor: Theme.of(context).colorScheme.primary,
            textColor: Colors.white,
            text: 'Send Message',
            onPressed: _submitForm,
          ),
        ],
      ),
    );
  }
}
