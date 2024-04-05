export interface GetProducts {
  code:           string;
  product:        Product;
  status:         number;
  status_verbose: string;
}


export interface GetProductsSearch {
  count:      number;
  page:       number;
  page_count: number;
  page_size:  number;
  products:   Product[];
  skip:       number;
}

export interface Product {
  _id:                                                                               string;
  _keywords:                                                                         string[];
  abbreviated_product_name:                                                          string;
  abbreviated_product_name_fr:                                                       string;
  abbreviated_product_name_fr_imported:                                              string;
  added_countries_tags:                                                              any[];
  additives_debug_tags:                                                              string[];
  additives_n:                                                                       number;
  additives_old_n:                                                                   number;
  additives_old_tags:                                                                string[];
  additives_original_tags:                                                           string[];
  additives_prev_original_tags:                                                      string[];
  additives_tags:                                                                    string[];
  allergens:                                                                         string;
  allergens_from_ingredients:                                                        string;
  allergens_from_user:                                                               string;
  allergens_hierarchy:                                                               string[];
  allergens_imported:                                                                string;
  allergens_lc:                                                                      string;
  allergens_tags:                                                                    string[];
  amino_acids_prev_tags:                                                             any[];
  amino_acids_tags:                                                                  any[];
  brands:                                                                            string;
  brands_imported:                                                                   string;
  brands_tags:                                                                       string[];
  carbon_footprint_from_known_ingredients_debug:                                     string;
  carbon_footprint_percent_of_known_ingredients:                                     number;
  categories:                                                                        string;
  categories_hierarchy:                                                              string[];
  categories_lc:                                                                     string;
  categories_old:                                                                    string;
  categories_properties:                                                             CategoriesProperties;
  categories_properties_tags:                                                        string[];
  categories_tags:                                                                   string[];
  category_properties:                                                               CategoryProperties;
  checked:                                                                           string;
  checkers_tags:                                                                     string[];
  ciqual_food_name_tags:                                                             string[];
  cities_tags:                                                                       any[];
  code:                                                                              string;
  codes_tags:                                                                        string[];
  compared_to_category:                                                              string;
  complete:                                                                          number;
  completeness:                                                                      number;
  conservation_conditions:                                                           string;
  conservation_conditions_fr:                                                        string;
  conservation_conditions_fr_imported:                                               string;
  correctors_tags:                                                                   string[];
  countries:                                                                         string;
  countries_beforescanbot:                                                           string;
  countries_hierarchy:                                                               string[];
  countries_imported:                                                                string;
  countries_lc:                                                                      string;
  countries_tags:                                                                    string[];
  created_t:                                                                         number;
  creator:                                                                           string;
  customer_service:                                                                  string;
  customer_service_fr:                                                               string;
  customer_service_fr_imported:                                                      string;
  data_quality_bugs_tags:                                                            any[];
  data_quality_errors_tags:                                                          any[];
  data_quality_info_tags:                                                            string[];
  data_quality_tags:                                                                 string[];
  data_quality_warnings_tags:                                                        string[];
  data_sources:                                                                      string;
  data_sources_imported:                                                             string;
  data_sources_tags:                                                                 string[];
  debug_param_sorted_langs:                                                          string[];
  ecoscore_data:                                                                     EcoscoreData;
  ecoscore_extended_data:                                                            EcoscoreExtendedData;
  ecoscore_extended_data_version:                                                    string;
  ecoscore_grade:                                                                    EcoscoreGrade;
  ecoscore_score:                                                                    number;
  ecoscore_tags:                                                                     EcoscoreGrade[];
  editors_tags:                                                                      string[];
  emb_codes:                                                                         string;
  emb_codes_orig:                                                                    string;
  emb_codes_tags:                                                                    any[];
  entry_dates_tags:                                                                  string[];
  environment_impact_level:                                                          string;
  environment_impact_level_tags:                                                     any[];
  expiration_date:                                                                   string;
  food_groups:                                                                       string;
  food_groups_tags:                                                                  string[];
  generic_name:                                                                      string;
  generic_name_de:                                                                   string;
  generic_name_en:                                                                   string;
  generic_name_es:                                                                   string;
  generic_name_fr:                                                                   string;
  generic_name_fr_imported:                                                          string;
  generic_name_it:                                                                   string;
  generic_name_pl:                                                                   string;
  generic_name_ro:                                                                   string;
  grades:                                                                            CategoryProperties;
  id:                                                                                string;
  image_front_small_url:                                                             string;
  image_front_thumb_url:                                                             string;
  image_front_url:                                                                   string;
  image_ingredients_small_url:                                                       string;
  image_ingredients_thumb_url:                                                       string;
  image_ingredients_url:                                                             string;
  image_nutrition_small_url:                                                         string;
  image_nutrition_thumb_url:                                                         string;
  image_nutrition_url:                                                               string;
  image_packaging_small_url:                                                         string;
  image_packaging_thumb_url:                                                         string;
  image_packaging_url:                                                               string;
  image_small_url:                                                                   string;
  image_thumb_url:                                                                   string;
  image_url:                                                                         string;
  images:                                                                            Images;
  informers_tags:                                                                    string[];
  ingredients:                                                                       Ingredient[];
  ingredients_analysis:                                                              IngredientsAnalysis;
  ingredients_analysis_tags:                                                         string[];
  ingredients_debug:                                                                 Array<null | string>;
  ingredients_from_or_that_may_be_from_palm_oil_n:                                   number;
  ingredients_from_palm_oil_n:                                                       number;
  ingredients_from_palm_oil_tags:                                                    string[];
  ingredients_hierarchy:                                                             string[];
  ingredients_ids_debug:                                                             string[];
  ingredients_lc:                                                                    string;
  ingredients_n:                                                                     number;
  ingredients_n_tags:                                                                string[];
  ingredients_non_nutritive_sweeteners_n:                                            number;
  ingredients_original_tags:                                                         string[];
  ingredients_percent_analysis:                                                      number;
  ingredients_sweeteners_n:                                                          number;
  ingredients_tags:                                                                  string[];
  ingredients_text:                                                                  string;
  ingredients_text_de:                                                               string;
  ingredients_text_de_ocr_1648897071:                                                string;
  ingredients_text_de_ocr_1648897071_result:                                         string;
  ingredients_text_de_ocr_1648990410:                                                string;
  ingredients_text_de_ocr_1648990410_result:                                         string;
  ingredients_text_debug:                                                            string;
  ingredients_text_en:                                                               string;
  ingredients_text_es:                                                               string;
  ingredients_text_fr:                                                               string;
  ingredients_text_fr_imported:                                                      string;
  ingredients_text_it:                                                               string;
  ingredients_text_pl:                                                               string;
  ingredients_text_ro:                                                               string;
  ingredients_text_with_allergens:                                                   string;
  ingredients_text_with_allergens_de:                                                string;
  ingredients_text_with_allergens_en:                                                string;
  ingredients_text_with_allergens_es:                                                string;
  ingredients_text_with_allergens_fr:                                                string;
  ingredients_text_with_allergens_it:                                                string;
  ingredients_text_with_allergens_pl:                                                string;
  ingredients_text_with_allergens_ro:                                                string;
  ingredients_that_may_be_from_palm_oil_n:                                           number;
  ingredients_that_may_be_from_palm_oil_tags:                                        any[];
  ingredients_with_specified_percent_n:                                              number;
  ingredients_with_specified_percent_sum:                                            number;
  ingredients_with_unspecified_percent_n:                                            number;
  ingredients_with_unspecified_percent_sum:                                          number;
  ingredients_without_ciqual_codes:                                                  string[];
  ingredients_without_ciqual_codes_n:                                                number;
  interface_version_created:                                                         string;
  interface_version_modified:                                                        string;
  known_ingredients_n:                                                               number;
  labels:                                                                            string;
  labels_hierarchy:                                                                  any[];
  labels_lc:                                                                         string;
  labels_old:                                                                        string;
  labels_tags:                                                                       any[];
  lang:                                                                              string;
  lang_imported:                                                                     string;
  languages:                                                                         { [key: string]: number };
  languages_codes:                                                                   LanguagesCodes;
  languages_hierarchy:                                                               string[];
  languages_tags:                                                                    string[];
  last_check_dates_tags:                                                             string[];
  last_checked_t:                                                                    number;
  last_checker:                                                                      string;
  last_edit_dates_tags:                                                              string[];
  last_editor:                                                                       LastEditor;
  last_image_dates_tags:                                                             string[];
  last_image_t:                                                                      number;
  last_modified_by:                                                                  LastEditor;
  last_modified_t:                                                                   number;
  last_updated_t:                                                                    number;
  lc:                                                                                string;
  lc_imported:                                                                       string;
  link:                                                                              string;
  main_countries_tags:                                                               any[];
  manufacturing_places:                                                              string;
  manufacturing_places_tags:                                                         any[];
  max_imgid:                                                                         string;
  minerals_prev_tags:                                                                any[];
  minerals_tags:                                                                     any[];
  misc_tags:                                                                         string[];
  no_nutrition_data:                                                                 string;
  no_nutrition_data_imported:                                                        string;
  nova_group:                                                                        number;
  nova_group_debug:                                                                  string;
  nova_groups:                                                                       string;
  nova_groups_markers:                                                               { [key: string]: Array<string[]> };
  nova_groups_tags:                                                                  string[];
  nucleotides_prev_tags:                                                             any[];
  nucleotides_tags:                                                                  any[];
  nutrient_levels:                                                                   NutrientLevels;
  nutrient_levels_tags:                                                              string[];
  nutriments:                                                                        Nutriments;
  nutriscore:                                                                        { [key: string]: Nutriscore };
  nutriscore_2021_tags:                                                              string[];
  nutriscore_2023_tags:                                                              string[];
  nutriscore_data:                                                                   NutriscoreData;
  nutriscore_grade:                                                                  string;
  nutriscore_score:                                                                  number;
  nutriscore_score_opposite:                                                         number;
  nutriscore_tags:                                                                   string[];
  nutriscore_version:                                                                string;
  nutrition_data:                                                                    string;
  nutrition_data_per:                                                                string;
  nutrition_data_per_imported:                                                       string;
  nutrition_data_prepared:                                                           string;
  nutrition_data_prepared_per:                                                       string;
  nutrition_grade_fr:                                                                string;
  nutrition_grades:                                                                  string;
  nutrition_grades_tags:                                                             string[];
  nutrition_score_beverage:                                                          number;
  nutrition_score_debug:                                                             string;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients:       number;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients:          number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value:    number;
  obsolete:                                                                          string;
  obsolete_imported:                                                                 string;
  obsolete_since_date:                                                               string;
  origin:                                                                            string;
  origin_de:                                                                         string;
  origin_en:                                                                         string;
  origin_es:                                                                         string;
  origin_fr:                                                                         string;
  origin_it:                                                                         string;
  origin_pl:                                                                         string;
  origin_ro:                                                                         string;
  origins:                                                                           string;
  origins_hierarchy:                                                                 any[];
  origins_lc:                                                                        string;
  origins_old:                                                                       string;
  origins_tags:                                                                      any[];
  other_nutritional_substances_prev_tags:                                            any[];
  other_nutritional_substances_tags:                                                 any[];
  owner:                                                                             LastEditor;
  owner_fields:                                                                      { [key: string]: number };
  owner_imported:                                                                    LastEditor;
  owners_tags:                                                                       LastEditor;
  packaging:                                                                         string;
  packaging_hierarchy:                                                               string[];
  packaging_imported:                                                                string;
  packaging_lc:                                                                      string;
  packaging_materials_tags:                                                          string[];
  packaging_old:                                                                     string;
  packaging_old_before_taxonomization:                                               string;
  packaging_recycling_tags:                                                          string[];
  packaging_shapes_tags:                                                             string[];
  packaging_tags:                                                                    string[];
  packaging_text:                                                                    string;
  packaging_text_de:                                                                 string;
  packaging_text_en:                                                                 string;
  packaging_text_es:                                                                 string;
  packaging_text_fr:                                                                 string;
  packaging_text_it:                                                                 string;
  packaging_text_pl:                                                                 string;
  packaging_text_ro:                                                                 string;
  packagings:                                                                        ProductPackaging[];
  packagings_complete:                                                               number;
  packagings_materials:                                                              PackagingsMaterials;
  packagings_materials_main:                                                         string;
  packagings_n:                                                                      number;
  photographers_tags:                                                                string[];
  pnns_groups_1:                                                                     string;
  pnns_groups_1_tags:                                                                string[];
  pnns_groups_2:                                                                     string;
  pnns_groups_2_tags:                                                                string[];
  popularity_key:                                                                    number;
  popularity_tags:                                                                   string[];
  producer_version_id:                                                               Date;
  producer_version_id_imported:                                                      Date;
  product_name:                                                                      string;
  product_name_de:                                                                   string;
  product_name_en:                                                                   string;
  product_name_es:                                                                   string;
  product_name_fr:                                                                   string;
  product_name_fr_imported:                                                          string;
  product_name_it:                                                                   string;
  product_name_pl:                                                                   string;
  product_name_ro:                                                                   string;
  product_quantity:                                                                  string;
  product_quantity_unit:                                                             string;
  purchase_places:                                                                   string;
  purchase_places_tags:                                                              string[];
  quantity:                                                                          string;
  quantity_imported:                                                                 string;
  removed_countries_tags:                                                            any[];
  rev:                                                                               number;
  scans_n:                                                                           number;
  scores:                                                                            CategoryProperties;
  selected_images:                                                                   SelectedImages;
  serving_quantity:                                                                  number;
  serving_quantity_unit:                                                             string;
  serving_size:                                                                      string;
  serving_size_imported:                                                             string;
  sortkey:                                                                           number;
  sources:                                                                           Source[];
  sources_fields:                                                                    SourcesFields;
  states:                                                                            string;
  states_hierarchy:                                                                  string[];
  states_tags:                                                                       string[];
  stores:                                                                            string;
  stores_tags:                                                                       string[];
  teams:                                                                             string;
  teams_tags:                                                                        string[];
  traces:                                                                            string;
  traces_from_ingredients:                                                           string;
  traces_from_user:                                                                  string;
  traces_hierarchy:                                                                  string[];
  traces_lc:                                                                         string;
  traces_tags:                                                                       string[];
  unique_scans_n:                                                                    number;
  unknown_ingredients_n:                                                             number;
  unknown_nutrients_tags:                                                            any[];
  update_key:                                                                        string;
  vitamins_prev_tags:                                                                any[];
  vitamins_tags:                                                                     any[];
  weighers_tags:                                                                     string[];
  weighters_tags:                                                                    any[];
}

export interface CategoriesProperties {
  "agribalyse_proxy_food_code:en": string;
}

export interface CategoryProperties {
}

export interface EcoscoreData {
  adjustments:          Adjustments;
  agribalyse:           Agribalyse;
  grade:                EcoscoreGrade;
  grades:               { [key: string]: EcoscoreGrade };
  missing:              Missing;
  missing_data_warning: number;
  previous_data:        PreviousData;
  score:                number;
  scores:               { [key: string]: number };
  status:               string;
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients;
  packaging:              AdjustmentsPackaging;
  production_system:      ProductionSystem;
  threatened_species:     ThreatenedSpecies;
}

export interface OriginsOfIngredients {
  aggregated_origins:         AggregatedOrigin[];
  epi_score:                  number;
  epi_value:                  number;
  origins_from_categories:    string[];
  origins_from_origins_field: string[];
  transportation_score:       number;
  transportation_scores:      { [key: string]: number };
  transportation_value:       number;
  transportation_values:      { [key: string]: number };
  value:                      number;
  values:                     { [key: string]: number };
  warning:                    string;
}

export interface AggregatedOrigin {
  epi_score:            string;
  origin:               string;
  percent:              number;
  transportation_score: null;
}

export interface AdjustmentsPackaging {
  non_recyclable_and_non_biodegradable_materials: number;
  packagings:                                     PackagingPackaging[];
  score:                                          number;
  value:                                          number;
  warning:                                        string;
}

export interface PackagingPackaging {
  ecoscore_material_score:               number;
  ecoscore_shape_ratio:                  number;
  material:                              string;
  non_recyclable_and_non_biodegradable?: FromPalmOil;
  number_of_units?:                      string;
  quantity_per_unit?:                    string;
  quantity_per_unit_unit?:               string;
  quantity_per_unit_value?:              string;
  recycling?:                            string;
  shape:                                 string;
  weight_measured?:                      number;
}

export enum FromPalmOil {
  No = "no",
  Yes = "yes",
}

export interface ProductionSystem {
  labels:  any[];
  value:   number;
  warning: string;
}

export interface ThreatenedSpecies {
  ingredient: string;
  value:      number;
}

export interface Agribalyse {
  agribalyse_proxy_food_code: string;
  co2_agriculture:            number;
  co2_consumption:            number;
  co2_distribution:           number;
  co2_packaging:              number;
  co2_processing:             number;
  co2_total:                  number;
  co2_transportation:         number;
  code:                       string;
  dqr:                        string;
  ef_agriculture:             number;
  ef_consumption:             number;
  ef_distribution:            number;
  ef_packaging:               number;
  ef_processing:              number;
  ef_total:                   number;
  ef_transportation:          number;
  is_beverage:                number;
  name_en:                    string;
  name_fr:                    string;
  score:                      number;
  version?:                   string;
}

export enum EcoscoreGrade {
  C = "c",
}

export interface Missing {
  labels:     number;
  origins:    number;
  packagings: number;
}

export interface PreviousData {
  agribalyse: Agribalyse;
  grade:      string;
  score:      number;
}

export interface EcoscoreExtendedData {
  impact: Impact;
}

export interface Impact {
  ef_single_score_log_stddev: number;
  likeliest_impacts:          LikeliestImpacts;
  likeliest_recipe:           { [key: string]: number };
  mass_ratio_uncharacterized: number;
}

export interface LikeliestImpacts {
  Climate_change:  number;
  EF_single_score: number;
}

export interface Images {
  "1":            The1;
  "2":            The1;
  "3":            The1;
  "4":            The1;
  "5":            The1;
  "6":            The1;
  "7":            The1;
  "8":            The1;
  "9":            The1;
  "10":           The1;
  "11":           The1;
  "12":           The1;
  "13":           The13;
  "14":           The13;
  "15":           The13;
  "16":           The13;
  "17":           The13;
  "18":           The13;
  "19":           The13;
  "20":           The1;
  "21":           The1;
  "22":           The1;
  "23":           The1;
  "24":           The1;
  "25":           The1;
  "26":           The1;
  "28":           The1;
  "29":           The1;
  "30":           The1;
  "33":           The1;
  "34":           The1;
  "35":           The1;
  "36":           The1;
  "37":           The1;
  "38":           The1;
  "39":           The1;
  "40":           The1;
  "41":           The1;
  "42":           The1;
  "43":           The1;
  "44":           The1;
  "45":           The1;
  "46":           The1;
  "47":           The1;
  "48":           The1;
  "49":           The1;
  "50":           The1;
  "51":           The1;
  "52":           The1;
  "53":           The1;
  "54":           The1;
  "55":           The1;
  "56":           The1;
  "57":           The1;
  "58":           The1;
  "59":           The1;
  "60":           The1;
  "61":           The1;
  "62":           The1;
  "63":           The1;
  "64":           The1;
  "65":           The1;
  "66":           The1;
  "67":           The1;
  front_de:       FrontDe;
  front_en:       FrontEn;
  front_es:       FrontEn;
  front_fr:       FrontDe;
  front_it:       FrontEn;
  front_pl:       FrontDe;
  front_ro:       FrontDe;
  ingredients_fr: FrontEn;
  ingredients_it: FrontDe;
  ingredients_pl: FrontDe;
  nutrition_de:   FrontDe;
  nutrition_fr:   FrontDe;
  nutrition_it:   FrontDe;
  packaging_de:   FrontDe;
  packaging_en:   FrontDe;
  packaging_fr:   FrontDe;
  packaging_it:   FrontDe;
}

export interface The1 {
  sizes:      Sizes;
  uploaded_t: number;
  uploader:   string;
}

export interface Sizes {
  "100":  The100;
  "400":  The100;
  full:   The100;
  "200"?: The100;
}

export interface The100 {
  h: number;
  w: number;
}

export interface The13 {
  sizes:      Sizes;
  uploaded_t: string;
  uploader:   string;
}

export interface FrontDe {
  angle:                   number | null | string;
  coordinates_image_size?: string;
  geometry:                string;
  imgid:                   string;
  normalize:               null | string;
  rev:                     string;
  sizes:                   Sizes;
  white_magic:             null | string;
  x1:                      null | string;
  x2:                      null | string;
  y1:                      null | string;
  y2:                      null | string;
}

export interface FrontEn {
  angle:                  string;
  coordinates_image_size: string;
  geometry:               string;
  imgid:                  string;
  normalize:              string;
  rev:                    string;
  sizes:                  Sizes;
  white_magic:            string;
  x1:                     string;
  x2:                     string;
  y1:                     string;
  y2:                     string;
}

export interface Ingredient {
  id:                      string;
  percent_estimate:        number;
  rank?:                   number;
  text:                    string;
  ciqual_proxy_food_code?: string;
  has_sub_ingredients?:    FromPalmOil;
  percent?:                number;
  vegan?:                  FromPalmOil;
  vegetarian?:             FromPalmOil;
  from_palm_oil?:          FromPalmOil;
  ciqual_food_code?:       string;
  processing?:             string;
}

export interface IngredientsAnalysis {
  "en:non-vegan":                 string[];
  "en:palm-oil":                  string[];
  "en:vegan-status-unknown":      string[];
  "en:vegetarian-status-unknown": string[];
}

export interface LanguagesCodes {
  de: number;
  en: number;
  es: number;
  fr: number;
  it: number;
  pl: number;
  ro: number;
}

export enum LastEditor {
  Ferrero = "ferrero",
  OrgFerreroFranceCommerciale = "org-ferrero-france-commerciale",
}

export interface NutrientLevels {
  fat:             string;
  salt:            string;
  "saturated-fat": string;
  sugars:          string;
}

export interface Nutriments {
  carbohydrates:                                                 number;
  carbohydrates_100g:                                            number;
  carbohydrates_serving:                                         number;
  carbohydrates_unit:                                            string;
  carbohydrates_value:                                           number;
  "carbon-footprint-from-known-ingredients_100g":                number;
  "carbon-footprint-from-known-ingredients_product":             number;
  "carbon-footprint-from-known-ingredients_serving":             number;
  energy:                                                        number;
  "energy-kcal":                                                 number;
  "energy-kcal_100g":                                            number;
  "energy-kcal_serving":                                         number;
  "energy-kcal_unit":                                            string;
  "energy-kcal_value":                                           number;
  "energy-kcal_value_computed":                                  number;
  "energy-kj":                                                   number;
  "energy-kj_100g":                                              number;
  "energy-kj_serving":                                           number;
  "energy-kj_unit":                                              string;
  "energy-kj_value":                                             number;
  "energy-kj_value_computed":                                    number;
  energy_100g:                                                   number;
  energy_serving:                                                number;
  energy_unit:                                                   string;
  energy_value:                                                  number;
  fat:                                                           number;
  fat_100g:                                                      number;
  fat_serving:                                                   number;
  fat_unit:                                                      string;
  fat_value:                                                     number;
  fiber:                                                         number;
  fiber_100g:                                                    number;
  fiber_serving:                                                 number;
  fiber_unit:                                                    string;
  fiber_value:                                                   number;
  "fruits-vegetables-legumes-estimate-from-ingredients_100g":    number;
  "fruits-vegetables-legumes-estimate-from-ingredients_serving": number;
  "fruits-vegetables-nuts-estimate-from-ingredients_100g":       number;
  "fruits-vegetables-nuts-estimate-from-ingredients_serving":    number;
  "nova-group":                                                  number;
  "nova-group_100g":                                             number;
  "nova-group_serving":                                          number;
  "nutrition-score-fr":                                          number;
  "nutrition-score-fr_100g":                                     number;
  proteins:                                                      number;
  proteins_100g:                                                 number;
  proteins_serving:                                              number;
  proteins_unit:                                                 string;
  proteins_value:                                                number;
  salt:                                                          number;
  salt_100g:                                                     number;
  salt_serving:                                                  number;
  salt_unit:                                                     string;
  salt_value:                                                    number;
  "saturated-fat":                                               number;
  "saturated-fat_100g":                                          number;
  "saturated-fat_serving":                                       number;
  "saturated-fat_unit":                                          string;
  "saturated-fat_value":                                         number;
  sodium:                                                        number;
  sodium_100g:                                                   number;
  sodium_serving:                                                number;
  sodium_unit:                                                   string;
  sodium_value:                                                  number;
  sugars:                                                        number;
  sugars_100g:                                                   number;
  sugars_serving:                                                number;
  sugars_unit:                                                   string;
  sugars_value:                                                  number;
}

export interface Nutriscore {
  category_available:    number;
  data:                  Data;
  grade:                 string;
  nutrients_available:   number;
  nutriscore_applicable: number;
  nutriscore_computed:   number;
  score:                 number;
}

export interface Data {
  energy?:                                                number;
  energy_points?:                                         number;
  energy_value?:                                          number;
  fiber?:                                                 number;
  fiber_points?:                                          number;
  fiber_value?:                                           number;
  fruits_vegetables_nuts_colza_walnut_olive_oils?:        number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points?: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value?:  number;
  is_beverage:                                            number;
  is_cheese:                                              number;
  is_fat?:                                                number;
  is_water:                                               number;
  negative_points:                                        number;
  positive_points:                                        number;
  proteins?:                                              number;
  proteins_points?:                                       number;
  proteins_value?:                                        number;
  saturated_fat?:                                         number;
  saturated_fat_points?:                                  number;
  saturated_fat_value?:                                   number;
  sodium?:                                                number;
  sodium_points?:                                         number;
  sodium_value?:                                          number;
  sugars?:                                                number;
  sugars_points?:                                         number;
  sugars_value?:                                          number;
  grade?:                                                 string;
  score?:                                                 number;
  components?:                                            Components;
  count_proteins?:                                        number;
  count_proteins_reason?:                                 string;
  is_fat_oil_nuts_seeds?:                                 number;
  is_red_meat_product?:                                   number;
  negative_points_max?:                                   number;
  positive_nutrients?:                                    string[];
  positive_points_max?:                                   number;
}

export interface Components {
  negative: Tive[];
  positive: Tive[];
}

export interface Tive {
  id:         string;
  points:     number;
  points_max: number;
  unit:       string;
  value:      number;
}

export interface NutriscoreData {
  energy:                                                number;
  energy_points:                                         number;
  energy_value:                                          number;
  fiber:                                                 number;
  fiber_points:                                          number;
  fiber_value:                                           number;
  fruits_vegetables_nuts_colza_walnut_olive_oils:        number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value:  number;
  is_beverage:                                           number;
  is_cheese:                                             number;
  is_fat:                                                number;
  is_water:                                              number;
  negative_points:                                       number;
  positive_points:                                       number;
  proteins:                                              number;
  proteins_points:                                       number;
  proteins_value:                                        number;
  saturated_fat:                                         number;
  saturated_fat_points:                                  number;
  saturated_fat_value:                                   number;
  sodium:                                                number;
  sodium_points:                                         number;
  sodium_value:                                          number;
  sugars:                                                number;
  sugars_points:                                         number;
  sugars_value:                                          number;
  grade?:                                                string;
  score?:                                                number;
}

export interface ProductPackaging {
  material?:                string;
  number_of_units?:         string;
  quantity_per_unit?:       string;
  quantity_per_unit_unit?:  string;
  quantity_per_unit_value?: string;
  recycling?:               string;
  shape:                    string;
  weight_measured?:         number;
}

export interface PackagingsMaterials {
  all:          All;
  "en:plastic": All;
  "en:unknown": CategoryProperties;
}

export interface All {
  weight:         number;
  weight_100g:    number;
  weight_percent: number;
}

export interface SelectedImages {
  front:       Front;
  ingredients: Ingredients;
  nutrition:   Nutrition;
  packaging:   Nutrition;
}

export interface Front {
  display: FrontDisplay;
  small:   FrontDisplay;
  thumb:   FrontDisplay;
}

export interface FrontDisplay {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
}

export interface Ingredients {
  display: IngredientsDisplay;
  small:   IngredientsDisplay;
  thumb:   IngredientsDisplay;
}

export interface IngredientsDisplay {
  fr: string;
  it: string;
  pl: string;
}

export interface Nutrition {
  display: NutritionDisplay;
  small:   NutritionDisplay;
  thumb:   NutritionDisplay;
}

export interface NutritionDisplay {
  de:  string;
  fr:  string;
  it:  string;
  en?: string;
}

export interface Source {
  fields:       string[];
  id:           LastEditor;
  images:       any[];
  import_t:     number;
  manufacturer: number | string;
  name:         Name;
  url:          null | string;
}

export enum Name {
  Ferrero = "Ferrero",
  FerreroFranceCommerciale = "ferrero-france-commerciale",
}

export interface SourcesFields {
  "org-gs1": OrgGs1;
}

export interface OrgGs1 {
  gln:                            string;
  gpcCategoryCode:                string;
  gpcCategoryName:                string;
  isAllergenRelevantDataProvided: string;
  lastChangeDateTime:             Date;
  partyName:                      string;
  productionVariantDescription:   string;
  publicationDateTime:            Date;
}
