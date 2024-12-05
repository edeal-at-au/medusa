/**
 * @schema AdminPromotionRule
 * type: object
 * description: The target rule's target rules.
 * x-schemaName: AdminPromotionRule
 * required:
 *   - id
 *   - values
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The target rule's ID.
 *   description:
 *     type: string
 *     title: description
 *     description: The target rule's description.
 *   attribute:
 *     type: string
 *     title: attribute
 *     description: The target rule's attribute.
 *   operator:
 *     oneOf:
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *       - type: string
 *         title: operator
 *         description: The target rule's operator.
 *   values:
 *     type: array
 *     description: The target rule's values.
 *     items:
 *       $ref: "#/components/schemas/BasePromotionRuleValue"
 * 
*/

