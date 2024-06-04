FROM mcr.microsoft.com/dotnet/sdk:8.0 
WORKDIR /usr/src/app
EXPOSE 5241

COPY . .
RUN dotnet build
CMD ["dotnet", "run"]
