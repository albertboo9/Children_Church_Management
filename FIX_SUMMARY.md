Fixed TypeScript compilation errors in backend/src/presentation/children/children.controller.ts

## Issues Fixed
Removed duplicate method definitions that were causing TypeScript errors:
- Duplicate `findAll()` method (lines 61-65 in original)
- Duplicate `findOne()` method (lines 67-71 in original) 
- Duplicate `update()` method (lines 73-81 in original)
- Duplicate `remove()` method (lines 83-87 in original)

The duplicates had syntax errors including:
- Missing parameter decorators (@Param, @Body)
- Missing parameter types
- Missing @CurrentUser() parameter where required
- Incorrect decorator placement

## Solution
Kept only the first correct set of method definitions (lines 26-58):
- create() - with @Body and @CurrentUser decorators
- findAll() - simple GET all
- findOne(@Param('id')) - with ID parameter
- update(@Param('id'), @Body(), @CurrentUser()) - with all required parameters
- remove(@Param('id')) - with ID parameter

All methods have appropriate @Roles decorators for authorization.

## Verification
The file now contains exactly one definition for each controller method with proper syntax and should compile successfully without TypeScript errors.