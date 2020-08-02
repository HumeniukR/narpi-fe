
export default class Validator {

    defaultRules = new Map([
        ['email', {
            isRequired: true,
            maxLength: 100,
            minLength: 5,
            pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        }],
        ['password', {
            isRequired: true,
            maxLength: 16,
            minLength: 6,
            pattern: null
        }]
    ])

    constructor(rules) {
        this.inputRules = rules || this.defaultRules
    }

    validate(name, value) {
        const rules = this.inputRules.get(name)
        let isValid = true
        let currentRuleIsOk = true
        let messages = []

        if (!rules) return {isValid, messages}

        if(rules.isRequired) {
            currentRuleIsOk = value !== undefined && value.length > 0
            if(!currentRuleIsOk) messages.push(`field can't be empty`)
            isValid = isValid && currentRuleIsOk
        }

        if(rules.maxLength) {
            currentRuleIsOk = value.length < rules.maxLength
            if(!currentRuleIsOk) messages.push(`your ${name} is too long, max length ${rules.maxLength}`)
            isValid = isValid && currentRuleIsOk
        }

        if(rules.minLength) {
            currentRuleIsOk = value.length > rules.minLength
            if(!currentRuleIsOk) messages.push(`your ${name} is too short, min length ${rules.minLength}`)
            isValid = isValid && currentRuleIsOk
        }

        if(rules.pattern) {
            currentRuleIsOk = isTextMatchesToPattern(value, rules.pattern)
            if(!currentRuleIsOk) messages.push(`enter correct ${name}`)
            isValid = isValid && currentRuleIsOk
        }

        return {isValid, messages}
    }
}


function isTextMatchesToPattern(text, pattern) {
    return pattern.test(String(text).toLowerCase());
}
