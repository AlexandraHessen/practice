render() {
    return (
      <div className="MyDiv">
        {
          (логическое выражение) &&
          <MyComponent fio="Иванов" age={5} />
        }
      </div>
    );
  }
