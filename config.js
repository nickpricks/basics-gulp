
exports.APP_PATHS = {
  SRC_ROOT: 'app/',
  GULP_SCRIPTS: 'app/scripts/**/*.js',
  GULP_IMAGES: 'app/images/**/*',
  GULP_SCSS: 'app/styles/**/*.scss',
  GULP_CSS: 'app/styles/**/*.css',
  GULP_HTML: 'app/**/*.html'
};

exports.DATE_FORMAT = 'MM/DD/YYYY';

exports.LOGIN_PATH = '/Index/Login';

exports.DASHBOARD_PATH = '/Dashboard/Index';

exports.ROLE_TYPES = {
  None: 0,
  ProjectServices: 1,
  FieldAssociate: 2,
  Contractor: 3
};

exports.ROLES = {
  ProjectServicesAdministrator: 1,
  ProjectServicesManager: 2,
  ProjectServicesEmployee: 3,
  ProjectServicesContractUser: 4,

  FieldAssociateStandard: 5,
  FieldAssociateDRFDefault: 6,
  FieldAssociateNursery: 7,

  ContractorStandard: 8,
  ContractorPreferredCustomer: 9,
};

exports.getRoleType = (role) => {
  const roles = exports.ROLES;
  switch (parseInt(role, 10)) {
    case roles.ProjectServicesAdministrator:
    case roles.ProjectServicesManager:
    case roles.ProjectServicesEmployee:
    case roles.ProjectServicesContractUser:
      return exports.ROLE_TYPES.ProjectServices;

    case roles.FieldAssociateStandard:
    case roles.FieldAssociateDRFDefault:
    case roles.FieldAssociateNursery:
      return exports.ROLE_TYPES.FieldAssociate;

    case roles.ContractorStandard:
    case roles.ContractorPreferredCustomer:
      return exports.ROLE_TYPES.Contractor;
    default:
      return exports.ROLE_TYPES.None;
  }
};

exports.PROJECT_TYPES = {
  TAKEOFF: 'takeoff',
  PX3: 'px3',
  SUBMITTAL: 'submittal',
};

exports.getProjectType = (project) => {
  if (project.IsSubmittal) {
    return exports.PROJECT_TYPES.SUBMITTAL;
  } else if (project.IsPx3) {
    return exports.PROJECT_TYPES.PX3;
  }
  return exports.PROJECT_TYPES.TAKEOFF;
};

exports.PROJECT_FILE_TYPES = {
  OriginalPlansFiles: 1,
  SpecificationsFiles: 2,
  AddendaFiles: 3,
  TakeoffPlansFiles: 4,
  WorkingFilesFiles: 5,
  CompletedTakeoffFiles: 6,
  CompletedPacketForReviewFiles: 7,
  FinalPacketFiles: 8,
  ClientFinalPacketFiles: 9,
  AddendaProcessFiles: 10,
  JDLIntegrationFiles: 11,
  BlankPricedMaterials: 12,
  None: 13,
  Other: 14,
  CompanyLogo: 15,
  CoverPageImage: 16,
  COVERSHEET: 17,
  NURSERY_LEGENDS: 18,
};

exports.states = [
  { Key: 1, Value: 'Alabama', Short: 'AL' },
  { Key: 2, Value: 'Alaska', Short: 'AK' },
  { Key: 3, Value: 'Arizona', Short: 'AZ' },
  { Key: 4, Value: 'Arkansas', Short: 'AR' },
  { Key: 5, Value: 'California', Short: 'CA' },
  { Key: 6, Value: 'Colorado', Short: 'CO' },
  { Key: 7, Value: 'Connecticut', Short: 'CT' },
  { Key: 8, Value: 'Delaware', Short: 'DE' },
  { Key: 52, Value: 'District of Columbia', Short: 'DC' },
  { Key: 9, Value: 'Florida', Short: 'FL' },
  { Key: 10, Value: 'Georgia', Short: 'GA' },
  { Key: 11, Value: 'Hawaii', Short: 'HI' },
  { Key: 12, Value: 'Idaho', Short: 'ID' },
  { Key: 13, Value: 'Illinois', Short: 'IL' },
  { Key: 14, Value: 'Indiana', Short: 'IN' },
  { Key: 15, Value: 'Iowa', Short: 'IA' },
  { Key: 16, Value: 'Kansas', Short: 'KS' },
  { Key: 17, Value: 'Kentucky', Short: 'KY' },
  { Key: 18, Value: 'Louisiana', Short: 'LA' },
  { Key: 19, Value: 'Maine', Short: 'ME' },
  { Key: 20, Value: 'Maryland', Short: 'MD' },
  { Key: 21, Value: 'Massachusetts', Short: 'MA' },
  { Key: 22, Value: 'Michigan', Short: 'MI' },
  { Key: 23, Value: 'Minnesota', Short: 'MN' },
  { Key: 24, Value: 'Mississippi', Short: 'MS' },
  { Key: 25, Value: 'Missouri', Short: 'MO' },
  { Key: 26, Value: 'Montana', Short: 'MT' },
  { Key: 27, Value: 'Nebraska', Short: 'NE' },
  { Key: 28, Value: 'Nevada', Short: 'NV' },
  { Key: 29, Value: 'New Hampshire', Short: 'NH' },
  { Key: 30, Value: 'New Jersey', Short: 'NJ' },
  { Key: 31, Value: 'New Mexico', Short: 'NM' },
  { Key: 32, Value: 'New York', Short: 'NY' },
  { Key: 33, Value: 'North Carolina', Short: 'NC' },
  { Key: 34, Value: 'North Dakota', Short: 'ND' },
  { Key: 35, Value: 'Ohio', Short: 'OH' },
  { Key: 36, Value: 'Oklahoma', Short: 'OK' },
  { Key: 37, Value: 'Oregon', Short: 'OR' },
  { Key: 38, Value: 'Pennsylvania', Short: 'PA' },
  { Key: 39, Value: 'Rhode Island', Short: 'RI' },
  { Key: 40, Value: 'South Carolina', Short: 'SC' },
  { Key: 41, Value: 'South Dakota', Short: 'SD' },
  { Key: 42, Value: 'Tennessee', Short: 'Tn' },
  { Key: 43, Value: 'Texas', Short: 'TX' },
  { Key: 51, Value: 'Texas - El Paso', Short: 'TE' },
  { Key: 44, Value: 'Utah', Short: 'UT' },
  { Key: 45, Value: 'Vermont', Short: 'VT' },
  { Key: 46, Value: 'Virginia', Short: 'VA' },
  { Key: 47, Value: 'Washington', Short: 'WA' },
  { Key: 48, Value: 'West Virginia', Short: 'WV' },
  { Key: 49, Value: 'Wisconsin', Short: 'WI' },
  { Key: 50, Value: 'Wyoming', Short: 'WY' },
  { Key: 53, Value: 'Ontario', Short: 'ON' },
  { Key: 54, Value: 'Alberta', Short: 'AB' },
  { Key: 55, Value: 'British Columbia', Short: 'BC' },
  { Key: 56, Value: 'Saskatchewan', Short: 'SK' },
  { Key: 57, Value: 'Manitoba', Short: 'MB' },
  { Key: 58, Value: 'Puerto Rico', Short: 'PR' },
  { Key: 59, Value: 'Virgin Islands', Short: 'VI' },
  { Key: 60, Value: 'Armed Forces - Europe/Africa/Canada', Short: 'AE' },
  { Key: 61, Value: 'Armed Forces - Pacific', Short: 'AP' },
  { Key: 62, Value: 'Guam', Short: 'GU' },
  { Key: 63, Value: 'Northern Mariana Islands', Short: 'MP' },
  { Key: 64, Value: 'Marshall Islands', Short: 'MH' },
  { Key: 65, Value: 'Armed Forces - Americas', Short: 'AA' },
  { Key: 66, Value: 'Palau', Short: 'PW' },
  { Key: 67, Value: 'Federated States of Micronesia', Short: 'FM' },
  { Key: 68, Value: 'American Samoa', Short: 'AS' },
  { Key: 69, Value: 'Newfoundland', Short: 'NL' },
  { Key: 70, Value: 'Nova Scotia', Short: 'NS' },
  { Key: 71, Value: 'Prince Edward Island', Short: 'PE' },
  { Key: 72, Value: 'New Brunswick', Short: 'NB' },
  { Key: 73, Value: 'Quebec', Short: 'QC' },
  { Key: 74, Value: 'Nunavut', Short: 'NU' },
  { Key: 75, Value: 'Northwest Territories', Short: 'NT' },
  { Key: 76, Value: 'Yukon Territory', Short: 'YT' },
];
