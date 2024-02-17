import { MetadataHelper } from "danet/src/metadata/helper.ts";
import { MY_METADATA_KEY } from "./contants.ts";

export const TemplateDecorator = (info: string): MethodDecorator => {
  return (_target, _propertyKey, descriptor) => {
    MetadataHelper.setMetadata(MY_METADATA_KEY, { info }, descriptor.value);
    return descriptor;
  };
};
