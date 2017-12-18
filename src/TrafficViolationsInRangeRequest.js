import SODA from 'soda-js'
import URI from './URI'

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

  dbFormat() {
    return 'YYYY-MM-DDTHH:mm:ss'
  }

  eventdateRangeBeginning() {
    return this.startDate.format(this.dbFormat())
  }

  eventdateRangeEnd() {
    return this.endDate.format(this.dbFormat())
  }

  getRows() {
    if (!this.isValid()) { return }
    this.query.getRows().on('success', this.success).on('error', this.error)
  }

  get nolaDataQuery() {
    return new SODA.Consumer('data.nola.gov').query()
      .withDataset('nfft-hjwi', { apiToken: '3QZx3OfxcculHVue3kYIPrrKZ' })
  }

  get query() {
    return this.nolaDataQuery.where({ stopdescription: 'TRAFFIC VIOLATION' })
      .where(`eventdate between '${this.eventdateRangeBeginning()}' and ` +
             `'${this.eventdateRangeEnd()}'`)
      .select('count(stopdescription)')
  }

  isValid() {
    return this.startDate.isValid() && this.endDate.isValid()
  }

  toString() {
    return `GET ${this.uri}`
  }

  get uri() {
    return URI(this.query.getURL())
  }
}
