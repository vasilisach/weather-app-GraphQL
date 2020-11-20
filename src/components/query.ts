import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
  query WeatherData($name: String!) {
    getCityByName(name: $name){
      name
      country
      weather{
        summary {
          description
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
        }
      }
    }
  }
`;