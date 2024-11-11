/**
 * @schema BaseOrderShippingDetail
 * type: object
 * description: The shipping method's detail.
 * x-schemaName: BaseOrderShippingDetail
 * required:
 *   - id
 *   - shipping_method_id
 *   - shipping_method
 *   - created_at
 *   - updated_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The detail's ID.
 *   shipping_method_id:
 *     type: string
 *     title: shipping_method_id
 *     description: The detail's shipping method id.
 *   shipping_method:
 *     $ref: "#/components/schemas/BaseOrderShippingMethod"
 *   claim_id:
 *     type: string
 *     title: claim_id
 *     description: The detail's claim id.
 *   exchange_id:
 *     type: string
 *     title: exchange_id
 *     description: The detail's exchange id.
 *   return_id:
 *     type: string
 *     title: return_id
 *     description: The detail's return id.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The detail's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The detail's updated at.
 * 
*/

