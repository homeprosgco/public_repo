/*
* Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License").
* You may not use this file except in compliance with the License.
* A copy of the License is located at
*
*  http://aws.amazon.com/apache2.0
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
* express or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/

// NOTE: This file is generated and may not follow lint rules defined in your app
// Generated files can be excluded from analysis in analysis_options.yaml
// For more info, see: https://dart.dev/guides/language/analysis-options#excluding-code-from-analysis

// ignore_for_file: public_member_api_docs, annotate_overrides, dead_code, dead_codepublic_member_api_docs, depend_on_referenced_packages, file_names, library_private_types_in_public_api, no_leading_underscores_for_library_prefixes, no_leading_underscores_for_local_identifiers, non_constant_identifier_names, null_check_on_nullable_type_parameter, override_on_non_overriding_member, prefer_adjacent_string_concatenation, prefer_const_constructors, prefer_if_null_operators, prefer_interpolation_to_compose_strings, slash_for_doc_comments, sort_child_properties_last, unnecessary_const, unnecessary_constructor_name, unnecessary_late, unnecessary_new, unnecessary_null_aware_assignments, unnecessary_nullable_for_final_variable_declarations, unnecessary_string_interpolations, use_build_context_synchronously

import 'ModelProvider.dart';
import 'package:amplify_core/amplify_core.dart' as amplify_core;
import 'package:collection/collection.dart';


/** This is an auto generated class representing the Booking type in your schema. */
class Booking extends amplify_core.Model {
  static const classType = const _BookingModelType();
  final String id;
  final BookingStatusEnum? _status;
  final String? _service;
  final PropertyTypeEnum? _propertyType;
  final HiringStageEnum? _hiringStage;
  final ProjectTimelineEnum? _timeline;
  final TimeOfDayEnum? _timeOfDay;
  final OwnershipStatusEnum? _ownershipStatus;
  final String? _details;
  final List<String>? _photoUploadUrls;
  final bool? _termsAccepted;
  final String? _fullname;
  final String? _address;
  final String? _email;
  final String? _phone;
  final List<String>? _professions;
  final bool? _confirmed;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  BookingModelIdentifier get modelIdentifier {
      return BookingModelIdentifier(
        id: id
      );
  }
  
  BookingStatusEnum get status {
    try {
      return _status!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get service {
    try {
      return _service!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  PropertyTypeEnum get propertyType {
    try {
      return _propertyType!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  HiringStageEnum get hiringStage {
    try {
      return _hiringStage!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  ProjectTimelineEnum get timeline {
    try {
      return _timeline!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  TimeOfDayEnum get timeOfDay {
    try {
      return _timeOfDay!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  OwnershipStatusEnum get ownershipStatus {
    try {
      return _ownershipStatus!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get details {
    try {
      return _details!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  List<String>? get photoUploadUrls {
    return _photoUploadUrls;
  }
  
  bool get termsAccepted {
    try {
      return _termsAccepted!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get fullname {
    try {
      return _fullname!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get address {
    try {
      return _address!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get email {
    try {
      return _email!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String? get phone {
    return _phone;
  }
  
  List<String>? get professions {
    return _professions;
  }
  
  bool? get confirmed {
    return _confirmed;
  }
  
  amplify_core.TemporalDateTime? get createdAt {
    return _createdAt;
  }
  
  amplify_core.TemporalDateTime? get updatedAt {
    return _updatedAt;
  }
  
  const Booking._internal({required this.id, required status, required service, required propertyType, required hiringStage, required timeline, required timeOfDay, required ownershipStatus, required details, photoUploadUrls, required termsAccepted, required fullname, required address, required email, phone, professions, confirmed, createdAt, updatedAt}): _status = status, _service = service, _propertyType = propertyType, _hiringStage = hiringStage, _timeline = timeline, _timeOfDay = timeOfDay, _ownershipStatus = ownershipStatus, _details = details, _photoUploadUrls = photoUploadUrls, _termsAccepted = termsAccepted, _fullname = fullname, _address = address, _email = email, _phone = phone, _professions = professions, _confirmed = confirmed, _createdAt = createdAt, _updatedAt = updatedAt;
  
  factory Booking({String? id, required BookingStatusEnum status, required String service, required PropertyTypeEnum propertyType, required HiringStageEnum hiringStage, required ProjectTimelineEnum timeline, required TimeOfDayEnum timeOfDay, required OwnershipStatusEnum ownershipStatus, required String details, List<String>? photoUploadUrls, required bool termsAccepted, required String fullname, required String address, required String email, String? phone, List<String>? professions, bool? confirmed}) {
    return Booking._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      status: status,
      service: service,
      propertyType: propertyType,
      hiringStage: hiringStage,
      timeline: timeline,
      timeOfDay: timeOfDay,
      ownershipStatus: ownershipStatus,
      details: details,
      photoUploadUrls: photoUploadUrls != null ? List<String>.unmodifiable(photoUploadUrls) : photoUploadUrls,
      termsAccepted: termsAccepted,
      fullname: fullname,
      address: address,
      email: email,
      phone: phone,
      professions: professions != null ? List<String>.unmodifiable(professions) : professions,
      confirmed: confirmed);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Booking &&
      id == other.id &&
      _status == other._status &&
      _service == other._service &&
      _propertyType == other._propertyType &&
      _hiringStage == other._hiringStage &&
      _timeline == other._timeline &&
      _timeOfDay == other._timeOfDay &&
      _ownershipStatus == other._ownershipStatus &&
      _details == other._details &&
      DeepCollectionEquality().equals(_photoUploadUrls, other._photoUploadUrls) &&
      _termsAccepted == other._termsAccepted &&
      _fullname == other._fullname &&
      _address == other._address &&
      _email == other._email &&
      _phone == other._phone &&
      DeepCollectionEquality().equals(_professions, other._professions) &&
      _confirmed == other._confirmed;
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("Booking {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("status=" + (_status != null ? amplify_core.enumToString(_status)! : "null") + ", ");
    buffer.write("service=" + "$_service" + ", ");
    buffer.write("propertyType=" + (_propertyType != null ? amplify_core.enumToString(_propertyType)! : "null") + ", ");
    buffer.write("hiringStage=" + (_hiringStage != null ? amplify_core.enumToString(_hiringStage)! : "null") + ", ");
    buffer.write("timeline=" + (_timeline != null ? amplify_core.enumToString(_timeline)! : "null") + ", ");
    buffer.write("timeOfDay=" + (_timeOfDay != null ? amplify_core.enumToString(_timeOfDay)! : "null") + ", ");
    buffer.write("ownershipStatus=" + (_ownershipStatus != null ? amplify_core.enumToString(_ownershipStatus)! : "null") + ", ");
    buffer.write("details=" + "$_details" + ", ");
    buffer.write("photoUploadUrls=" + (_photoUploadUrls != null ? _photoUploadUrls!.toString() : "null") + ", ");
    buffer.write("termsAccepted=" + (_termsAccepted != null ? _termsAccepted!.toString() : "null") + ", ");
    buffer.write("fullname=" + "$_fullname" + ", ");
    buffer.write("address=" + "$_address" + ", ");
    buffer.write("email=" + "$_email" + ", ");
    buffer.write("phone=" + "$_phone" + ", ");
    buffer.write("professions=" + (_professions != null ? _professions!.toString() : "null") + ", ");
    buffer.write("confirmed=" + (_confirmed != null ? _confirmed!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  Booking copyWith({BookingStatusEnum? status, String? service, PropertyTypeEnum? propertyType, HiringStageEnum? hiringStage, ProjectTimelineEnum? timeline, TimeOfDayEnum? timeOfDay, OwnershipStatusEnum? ownershipStatus, String? details, List<String>? photoUploadUrls, bool? termsAccepted, String? fullname, String? address, String? email, String? phone, List<String>? professions, bool? confirmed}) {
    return Booking._internal(
      id: id,
      status: status ?? this.status,
      service: service ?? this.service,
      propertyType: propertyType ?? this.propertyType,
      hiringStage: hiringStage ?? this.hiringStage,
      timeline: timeline ?? this.timeline,
      timeOfDay: timeOfDay ?? this.timeOfDay,
      ownershipStatus: ownershipStatus ?? this.ownershipStatus,
      details: details ?? this.details,
      photoUploadUrls: photoUploadUrls ?? this.photoUploadUrls,
      termsAccepted: termsAccepted ?? this.termsAccepted,
      fullname: fullname ?? this.fullname,
      address: address ?? this.address,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      professions: professions ?? this.professions,
      confirmed: confirmed ?? this.confirmed);
  }
  
  Booking copyWithModelFieldValues({
    ModelFieldValue<BookingStatusEnum>? status,
    ModelFieldValue<String>? service,
    ModelFieldValue<PropertyTypeEnum>? propertyType,
    ModelFieldValue<HiringStageEnum>? hiringStage,
    ModelFieldValue<ProjectTimelineEnum>? timeline,
    ModelFieldValue<TimeOfDayEnum>? timeOfDay,
    ModelFieldValue<OwnershipStatusEnum>? ownershipStatus,
    ModelFieldValue<String>? details,
    ModelFieldValue<List<String>?>? photoUploadUrls,
    ModelFieldValue<bool>? termsAccepted,
    ModelFieldValue<String>? fullname,
    ModelFieldValue<String>? address,
    ModelFieldValue<String>? email,
    ModelFieldValue<String?>? phone,
    ModelFieldValue<List<String>?>? professions,
    ModelFieldValue<bool?>? confirmed
  }) {
    return Booking._internal(
      id: id,
      status: status == null ? this.status : status.value,
      service: service == null ? this.service : service.value,
      propertyType: propertyType == null ? this.propertyType : propertyType.value,
      hiringStage: hiringStage == null ? this.hiringStage : hiringStage.value,
      timeline: timeline == null ? this.timeline : timeline.value,
      timeOfDay: timeOfDay == null ? this.timeOfDay : timeOfDay.value,
      ownershipStatus: ownershipStatus == null ? this.ownershipStatus : ownershipStatus.value,
      details: details == null ? this.details : details.value,
      photoUploadUrls: photoUploadUrls == null ? this.photoUploadUrls : photoUploadUrls.value,
      termsAccepted: termsAccepted == null ? this.termsAccepted : termsAccepted.value,
      fullname: fullname == null ? this.fullname : fullname.value,
      address: address == null ? this.address : address.value,
      email: email == null ? this.email : email.value,
      phone: phone == null ? this.phone : phone.value,
      professions: professions == null ? this.professions : professions.value,
      confirmed: confirmed == null ? this.confirmed : confirmed.value
    );
  }
  
  Booking.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _status = amplify_core.enumFromString<BookingStatusEnum>(json['status'], BookingStatusEnum.values),
      _service = json['service'],
      _propertyType = amplify_core.enumFromString<PropertyTypeEnum>(json['propertyType'], PropertyTypeEnum.values),
      _hiringStage = amplify_core.enumFromString<HiringStageEnum>(json['hiringStage'], HiringStageEnum.values),
      _timeline = amplify_core.enumFromString<ProjectTimelineEnum>(json['timeline'], ProjectTimelineEnum.values),
      _timeOfDay = amplify_core.enumFromString<TimeOfDayEnum>(json['timeOfDay'], TimeOfDayEnum.values),
      _ownershipStatus = amplify_core.enumFromString<OwnershipStatusEnum>(json['ownershipStatus'], OwnershipStatusEnum.values),
      _details = json['details'],
      _photoUploadUrls = json['photoUploadUrls']?.cast<String>(),
      _termsAccepted = json['termsAccepted'],
      _fullname = json['fullname'],
      _address = json['address'],
      _email = json['email'],
      _phone = json['phone'],
      _professions = json['professions']?.cast<String>(),
      _confirmed = json['confirmed'],
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null;
  
  Map<String, dynamic> toJson() => {
    'id': id, 'status': amplify_core.enumToString(_status), 'service': _service, 'propertyType': amplify_core.enumToString(_propertyType), 'hiringStage': amplify_core.enumToString(_hiringStage), 'timeline': amplify_core.enumToString(_timeline), 'timeOfDay': amplify_core.enumToString(_timeOfDay), 'ownershipStatus': amplify_core.enumToString(_ownershipStatus), 'details': _details, 'photoUploadUrls': _photoUploadUrls, 'termsAccepted': _termsAccepted, 'fullname': _fullname, 'address': _address, 'email': _email, 'phone': _phone, 'professions': _professions, 'confirmed': _confirmed, 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format()
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'status': _status,
    'service': _service,
    'propertyType': _propertyType,
    'hiringStage': _hiringStage,
    'timeline': _timeline,
    'timeOfDay': _timeOfDay,
    'ownershipStatus': _ownershipStatus,
    'details': _details,
    'photoUploadUrls': _photoUploadUrls,
    'termsAccepted': _termsAccepted,
    'fullname': _fullname,
    'address': _address,
    'email': _email,
    'phone': _phone,
    'professions': _professions,
    'confirmed': _confirmed,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt
  };

  static final amplify_core.QueryModelIdentifier<BookingModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<BookingModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final STATUS = amplify_core.QueryField(fieldName: "status");
  static final SERVICE = amplify_core.QueryField(fieldName: "service");
  static final PROPERTYTYPE = amplify_core.QueryField(fieldName: "propertyType");
  static final HIRINGSTAGE = amplify_core.QueryField(fieldName: "hiringStage");
  static final TIMELINE = amplify_core.QueryField(fieldName: "timeline");
  static final TIMEOFDAY = amplify_core.QueryField(fieldName: "timeOfDay");
  static final OWNERSHIPSTATUS = amplify_core.QueryField(fieldName: "ownershipStatus");
  static final DETAILS = amplify_core.QueryField(fieldName: "details");
  static final PHOTOUPLOADURLS = amplify_core.QueryField(fieldName: "photoUploadUrls");
  static final TERMSACCEPTED = amplify_core.QueryField(fieldName: "termsAccepted");
  static final FULLNAME = amplify_core.QueryField(fieldName: "fullname");
  static final ADDRESS = amplify_core.QueryField(fieldName: "address");
  static final EMAIL = amplify_core.QueryField(fieldName: "email");
  static final PHONE = amplify_core.QueryField(fieldName: "phone");
  static final PROFESSIONS = amplify_core.QueryField(fieldName: "professions");
  static final CONFIRMED = amplify_core.QueryField(fieldName: "confirmed");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "Booking";
    modelSchemaDefinition.pluralName = "Bookings";
    
    modelSchemaDefinition.authRules = [
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.PUBLIC,
        provider: amplify_core.AuthRuleProvider.IAM,
        operations: const [
          amplify_core.ModelOperation.CREATE,
          amplify_core.ModelOperation.UPDATE,
          amplify_core.ModelOperation.DELETE,
          amplify_core.ModelOperation.READ
        ])
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.STATUS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.SERVICE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.PROPERTYTYPE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.HIRINGSTAGE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.TIMELINE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.TIMEOFDAY,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.OWNERSHIPSTATUS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.DETAILS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.PHOTOUPLOADURLS,
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.TERMSACCEPTED,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.bool)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.FULLNAME,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.ADDRESS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.EMAIL,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.PHONE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.PROFESSIONS,
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Booking.CONFIRMED,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.bool)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.nonQueryField(
      fieldName: 'createdAt',
      isRequired: false,
      isReadOnly: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.nonQueryField(
      fieldName: 'updatedAt',
      isRequired: false,
      isReadOnly: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
  });
}

class _BookingModelType extends amplify_core.ModelType<Booking> {
  const _BookingModelType();
  
  @override
  Booking fromJson(Map<String, dynamic> jsonData) {
    return Booking.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'Booking';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [Booking] in your schema.
 */
class BookingModelIdentifier implements amplify_core.ModelIdentifier<Booking> {
  final String id;

  /** Create an instance of BookingModelIdentifier using [id] the primary key. */
  const BookingModelIdentifier({
    required this.id});
  
  @override
  Map<String, dynamic> serializeAsMap() => (<String, dynamic>{
    'id': id
  });
  
  @override
  List<Map<String, dynamic>> serializeAsList() => serializeAsMap()
    .entries
    .map((entry) => (<String, dynamic>{ entry.key: entry.value }))
    .toList();
  
  @override
  String serializeAsString() => serializeAsMap().values.join('#');
  
  @override
  String toString() => 'BookingModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is BookingModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}