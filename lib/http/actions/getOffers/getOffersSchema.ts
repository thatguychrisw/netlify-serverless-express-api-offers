import { AllowedSchema } from "express-json-validator-middleware";

const schema: AllowedSchema = {
    type: "object",
    required: ["zipCode"],
    properties: {
        zipCode: {type: "string"},
        loanType: {type: "string"}
    },
}

export default schema