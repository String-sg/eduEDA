import { createEmailSchema } from '@opengovsg/starter-kitty-validators/email'
import isEmail from 'validator/lib/isEmail'

const emailSchema = createEmailSchema({
  domains: [
    { domain: 'moe.edu.sg', includeSubdomains: false },
    { domain: 'schools.gov.sg', includeSubdomains: false },
    { domain: 'gov.sg', includeSubdomains: true },
  ],
})

/**
 * Returns whether the passed value is a valid government email.
 */
export const isGovEmail = (value: unknown) => {
  return (
    typeof value === 'string' &&
    isEmail(value) &&
    emailSchema.safeParse(value).success
  )
}
