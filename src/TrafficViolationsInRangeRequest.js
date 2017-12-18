import SODA from 'soda-js'
import URI from './URI'

const MAX_ROWS = 1000000000
export default class TrafficViolationsInRangeRequest {
  constructor({ endDate, onError, onSuccess, startDate } = {}) {
    this.endDate = endDate
    this.error = (error) => {
      if (typeof onError === 'function') { onError(error) }
    }
    this.startDate = startDate
    this.success = (rows) => {
      if (typeof onSuccess === 'function') { onSuccess(rows) }
    }
    this.getRows()
  }

  getRows() {
    if (!this.isValid()) { return }
    this.query.getRows().on('success', this.success).on('error', this.error)
  }

  isValid() {
    return this.startDate.isValid() && this.endDate.isValid()
  }

  get nolaDataQuery() {
    // @note data.nola.gov will limit queries to 1000 unless specified
    return new SODA.Consumer('data.nola.gov').query()
      .withDataset('nfft-hjwi', { apiToken: '3QZx3OfxcculHVue3kYIPrrKZ' })
      .limit(MAX_ROWS)
  }

  get query() {
    return this.nolaDataQuery.where({ stopdescription: 'TRAFFIC VIOLATION' })
      .where(`eventdate between '${this.startDate.toDBString()}' and ` +
             `'${this.endDate.toDBString()}'`)
  }

  toString() {
    return `GET ${this.uri}`
  }

  get uri() {
    return URI(this.query.getURL())
  }
}
