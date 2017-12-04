import URI from './URI'

export default class TrafficViolationsInRangeRequest {
  constructor({ endDate, startDate } = {}) {
    this.endDate = endDate
    this.startDate = startDate
  }

  get count() {
    if (!this.isValid()) { return 0 }
    try {
      let request = new XMLHttpRequest()
      request.open('get', this.uri.normalize(), false)
      request.setRequestHeader('X-App-Token', '3QZx3OfxcculHVue3kYIPrrKZ')
      request.setRequestHeader('Accept', 'application/json')
      request.send()
      return JSON.parse(request.response)[0].count_stopdescription
    }
    catch (e) {
      return 0
    }
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

  isValid() {
    return this.startDate.isValid() && this.endDate.isValid()
  }

  toString() {
    return `GET ${this.uri}`
  }

  get uri() {
    return URI('https://data.nola.gov/resource/nfft-hjwi')
      .addQuery({ stopdescription: 'TRAFFIC VIOLATION' })
      .addQuery({ $where: 'eventdate between ' +
                          `'${this.eventdateRangeBeginning()}' and ` +
                          `'${this.eventdateRangeEnd()}'` })
      .addQuery({ $select: "count(stopdescription)"})
  }
}
