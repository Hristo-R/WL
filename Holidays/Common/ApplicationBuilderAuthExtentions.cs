namespace Holidays.Web.Common
{
    using Holidays.Web.Models;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;

    public static class ApplicationBuilderAuthExtentions
    {
        private const string DefaultAdminPassword = "whitelabel2";

        private static readonly IdentityRole[] roles =
        {
            new IdentityRole("Administrator"),
            new IdentityRole("Operator")
        };

        public static async void SeedDatabase(
            this IApplicationBuilder app)
        {
            var serviceFactpry = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            var scope = serviceFactpry.CreateScope();
            using (scope)
            {
                var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

                foreach (var role in roles)
                {
                    if (!await roleManager.RoleExistsAsync(role.Name))
                    {
                        var result = await roleManager.CreateAsync(role);
                    }
                }

                var user = await userManager.FindByNameAsync("admin");
                if (user == null)
                {
                    user = new User()
                    {
                        UserName = "Administrator"
                    };

                    var result = await userManager.CreateAsync(user, DefaultAdminPassword);
                    result = await userManager.AddToRoleAsync(user, roles[0].Name);
                }
            }
        }
    }
}
