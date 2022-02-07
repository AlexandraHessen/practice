class ИмяКомпонента extends React.Component {

    static propTypes = {
      ... // типы props
    };
  
    static defaultProps = {
      ... // начальное значение props
    };
  
    constructor(props) {
      super(props);
      ...
  
      this.state = {
        ... // начальное значение state может быть указано здесь, оно может зависеть от props
      };
  
    }
  
    state = {
      ... // начальное значение state может быть указано здесь, оно может зависеть от this.props
    };
  
    render() {
      ...
    }
  
  }